import { NextFunction, Request, Response } from "express";
import { supabase } from "../config/supabase";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Token manquant",
      });
    }

    const token = authHeader.replace("Bearer ", "");

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({
        error: "Token invalide",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(500).json({
      error: "Erreur serveur",
    });
  }
}
