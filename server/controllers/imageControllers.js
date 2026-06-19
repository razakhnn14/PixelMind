import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import User from "../models/user.js";

export const aspectRatio = async (req, res) => {
  try {
    const userId = req.user.id;
    const {aspectRatio } = req.body;
    const filePath = req.file.path;

    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.credits === 0 || user.credits < 0) {
      return res.json({
        success: false,
        message: "No Credits Left",
        credits: user.credits,
      });
    }

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "aspect-ratio",
    });

    const transformedUrl = cloudinary.url(result.public_id, {
      crop: "fill",
      aspect_ratio: aspectRatio,
      format: "jpg",
      secure: true,
      flags: "attachment",
      attachment: "aspectRatio-photo.jpg",
    });
    
    fs.unlinkSync(filePath); // cleanup

    await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 });

    return res.json({
      success: true,
      message: "Image Generated",
      credits: user.credits - 1,
      url: transformedUrl,
    });
  } catch (err) {
      return res.json({ success: false, message: err.message });
    
  }
};

export const magicBg = async (req, res) => {
  try {
    const userId = req.user.id;
    const prompt = req.body.prompt || "remove background";
    const filePath = req.file.path;

    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.credits === 0 || user.credits < 0) {
      return res.json({
        success: false,
        message: "No Credits Left",
        credits: user.credits,
      });
    }

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "PixelMind",
    });
    const transformedUrl = cloudinary.url(result.public_id, {
      crop: "fill",
      flags: "attachment",
      attachment: "bg-photo.jpg",
      effect: `gen_background_replace:prompt_${prompt}`,
    });

    fs.unlinkSync(filePath); // cleanup

    await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 });

    return res.json({
      success: true,
      message: "Image Generated",
      credits: user.credits - 1,
      url: transformedUrl,
    });
  } catch (error) {
      return res.json({ success: false, message: err.message });

  }
};

export const enhanceImg = async (req, res) => {
  try {
    const userId = req.user.id;
    const filePath = req.file.path;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.credits === 0 || user.credits < 0) {
      return res.json({
        success: false,
        message: "No Credits Left",
        credits: user.credits,
      });
    }
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "enhance-image",
    });
    const transformedUrl = cloudinary.url(result.public_id, {
      effect: "enhance",
      crop: "fill",
      flags: "attachment",
      attachment: "enhance-photo.jpg",
    });
    fs.unlinkSync(filePath); // cleanup

    await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 });

    return res.json({
      success: true,
      message: "Image Generated",
      credits: user.credits - 1,
      url: transformedUrl,
    });
  } catch (err) {
      return res.json({ success: false, message: err.message });
    
  }
};

export const imgOptimization = async (req, res) => {
  try {
    const userId = req.user.id;
    const {quality, width } = req.body;
    const filePath = req.file.path;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.credits === 0 || user.credits < 0) {
      return res.json({
        success: false,
        message: "No Credits Left",
        credits: user.credits,
      });
    }

    const result = await cloudinary.uploader.upload(filePath, {
      folder: "img-optimization",
    });
    const transformedUrl = cloudinary.url(result.public_id, {
      flags: "attachment",
      attachment: "bg-photo.jpg",
      crop: "scale",
      width: width,
      quality: quality,
      fetch_format: "auto",
    });

    fs.unlinkSync(filePath); // cleanup
    
    await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 });

    return res.json({
      success: true,
      message: "Image Generated",
      credits: user.credits - 1,
      url: transformedUrl,
    });
  } catch (error) {
      return res.json({ success: false, message: err.message });

  }
};

export const bgRemove = async (req, res) => {
  try {
    const userId = req.user.id;
    const filePath = req.file.path;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.credits === 0 || user.credits < 0) {
      return res.json({
        success: false,
        message: "No Credits Left",
        credits: user.credits,
      });
    }
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "bg-remove-image",
    });
    const transformedUrl = cloudinary.url(result.public_id, {
      crop: "limit",
      width: 1500,
      height: 1500,
      flags: "attachment",
      attachment: "bg-remove-photo.jpg",
      fetch_format: "jpg",
      effect: "background_removal",
    });
    fs.unlinkSync(filePath); // cleanup

    await User.findByIdAndUpdate(user._id, { credits: user.credits - 1 });

    return res.json({
      success: true,
      message: "Image Generated",
      credits: user.credits - 1,
      url: transformedUrl,
    });
  } catch (err) {
      return res.json({ success: false, message: err.message });
    
  }
};
