import { Router } from "express";
import { supabase } from "../config/supabase";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const { count: members } = await supabase
      .from("members")
      .select("*", { count: "exact", head: true });

    const { count: active } = await supabase
      .from("members")
      .select("*", { count: "exact", head: true })
      .eq("status", "active");

    const { count: pending } = await supabase
      .from("members")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending");

    const { count: suspended } = await supabase
      .from("members")
      .select("*", { count: "exact", head: true })
      .eq("status", "suspended");

    res.json({
      members: members ?? 0,
      active: active ?? 0,
      pending: pending ?? 0,
      suspended: suspended ?? 0,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erreur serveur",
    });
  }
});

export default router;
