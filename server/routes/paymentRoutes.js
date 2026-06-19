import express from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';
import User from '../models/user.js'; // Adjust path if needed
import razorpay from '../config/razorpay.js';
import userAuth from '../middleware/auth.js';

dotenv.config();

const router = express.Router();

// POST: Create Razorpay Order
router.post('/create-order',userAuth, async (req, res) => {
  const { amount } = req.body;
  try {
    const options = {
      amount: amount * 100, // Razorpay accepts amount in paise
      currency: 'INR',
      receipt: `receipt_order_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    return res.json({ success: true, order });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

// POST: Verify Payment Signature & Update Credits
router.post('/verify',userAuth, async (req, res) => {
  const userId = req.user.id;
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    credits,
  } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    try {
     const user = await User.findByIdAndUpdate(userId, {
        $inc: { credits: credits }},
        {new:true}
      );

      return res.json({
        success: true,
        message: 'Payment verified and credits updated',
        credits: user.credits
      });
    } catch (err) {
      return res.json({
        success: false,
        message: 'Failed to update credits in database',
      });
    }
  } else {
    return res.json({
      success: false,
      message: 'Invalid signature',
    });
  }
});

export default router;
