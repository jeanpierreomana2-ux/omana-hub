import { Router } from "express";
import {
  createMember,
  deleteMember,
  getAllMembers,
  getMember,
  updateMember,
  updateMemberStatus,
} from "../controllers/member.controller";

const router = Router();

// Liste de tous les membres
router.get("/", getAllMembers);

// Un membre par ID
router.get("/:id", getMember);

// Création
router.post("/", createMember);

// Modification complète
router.put("/:id", updateMember);

// Changement de statut
router.patch("/:id/status", updateMemberStatus);

// Suppression
router.delete("/:id", deleteMember);

export default router;
