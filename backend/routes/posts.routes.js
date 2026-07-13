import { Router } from "express";
const router = Router();

import multer from "multer";
import {
  createPost,
  delete_comment_of_user,
  deletePost,
  getAllPosts,
  getCommentsByPost,
  incrementLikes,
} from "../controllers/posts.controller.js";
import { commentPost } from "../controllers/user.controller.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/post").post(upload.single("media"), createPost);
router.route("/posts").get(getAllPosts);
router.route("/delete_post").delete(deletePost);
router.route("/comment").post(commentPost);
router.route("/get_comments").get(getCommentsByPost);
router.route("/delete_comment").delete(delete_comment_of_user);
router.route("/increment_post_like").post(incrementLikes);

export default router;
