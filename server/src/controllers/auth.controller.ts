import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function me(req: Request, res: Response) {
  try {
    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      return res.status(401).json({
        error: "Utilisateur non authentifié",
      });
    }

    const user = await authService.getCurrentUser(userId);

    res.json(user);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}
