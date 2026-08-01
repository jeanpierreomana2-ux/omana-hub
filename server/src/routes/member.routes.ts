import { Router } from "express";
import {
  createMember,
  getAllMembers,
  getMember,
} from "../controllers/member.controller";

const router = Router();

// Liste de tous les membres
router.get("/", getAllMembers);

// Un membre par ID
router.get("/:id", getMember);

// Création d'un membre
router.post("/", createMember);

export default router;
