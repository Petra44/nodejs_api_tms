import express from "express";
const router = express.Router();

import {
  getAllSingers,
  getSinger,
  updateSinger,
  deleteSinger,
  postSinger,
} from "../controllers/singerController.js";

router.get("/", getAllSingers);
router.get(`/:id`, getSinger);
router.put(`/:id`, updateSinger);
router.delete(`/:id`, deleteSinger);
router.post("/", postSinger);

export default router;
