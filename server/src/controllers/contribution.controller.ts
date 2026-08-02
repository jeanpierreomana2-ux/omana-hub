import { Request, Response } from "express";
import * as contributionService from "../services/contribution.service";

export async function getAllContributions(_req: Request, res: Response) {
  try {
    const contributions = await contributionService.getContributions();

    res.json(contributions);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getContribution(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const contribution = await contributionService.getContributionById(id);

    res.json(contribution);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getMemberContributions(req: Request, res: Response) {
  try {
    const memberId = String(req.params.memberId);

    const contributions =
      await contributionService.getContributionsByMember(memberId);

    res.json(contributions);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function createContribution(req: Request, res: Response) {
  try {
    const contribution = await contributionService.createContribution(req.body);

    res.status(201).json(contribution);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function updateContribution(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const contribution = await contributionService.updateContribution(
      id,
      req.body,
    );

    res.json(contribution);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function deleteContribution(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    await contributionService.deleteContribution(id);

    res.json({
      success: true,
      message: "Cotisation supprimée avec succès.",
    });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}
