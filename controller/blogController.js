const Blogs = require("../models/blog");

exports.index = async (req, res, next) => {
  const blogs = await Blogs.find();
  res.status(200).json({
    message: "Successfully loaded",
    data: blogs,
  });
};

exports.add = async (req, res, next) => {
  const { title, detail } = req.body;
  const blogs = new Blogs({
    title: title,
    detail: detail,
  });

  await blogs.save();

  res.status(201).json({
    message: "Successfully added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  await Blogs.findByIdAndDelete(id);
  res.status(200).json({
    message: "Successfully removed",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { title, detail } = req.body;

  await Blogs.findByIdAndUpdate(id, {
    title: title,
    detail: detail,
  });

  res.status(200).json({
    message: "Succesfully updated",
  });
};

exports.show = async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blogs.findById(id);

  res.status(200).json({
    message: "Successfully get blog",
    data: blog,
  });
};
