import { Router } from "express";

import {
    createContribution,
    deleteContribution,
    getAllContributions,
    getContribution,
    getMemberContributions,
    updateContribution,
} from "../controllers/contribution.controller";

const router = Router();

// Toutes les cotisations
router.get("/", getAllContributions);

// Cotisations d'un membre
router.get("/member/:memberId", getMemberContributions);

// Une cotisation
router.get("/:id", getContribution);

// Nouvelle cotisation
router.post("/", createContribution);

// Modifier
router.put("/:id", updateContribution);

// Supprimer
router.delete("/:id", deleteContribution);

export default router;
