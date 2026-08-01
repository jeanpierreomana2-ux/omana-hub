import { Router } from "express";
import { supabase } from "../config/supabase";

const router = Router();

/**
 * Liste de tous les membres
 */
router.get("/", async (_req, res) => {
  try {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return res.status(400).json({
        error: error.message,
      });
    }

    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Erreur serveur",
    });
  }
});

export default router;
