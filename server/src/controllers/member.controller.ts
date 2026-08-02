import { Request, Response } from "express";
import * as memberService from "../services/member.service";

export async function getAllMembers(_req: Request, res: Response) {
  try {
    const members = await memberService.getMembers();
    res.json(members);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getMember(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const member = await memberService.getMemberById(id);

    res.json(member);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function createMember(req: Request, res: Response) {
  try {
    const member = await memberService.createMember(req.body);

    res.status(201).json(member);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function updateMember(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const member = await memberService.updateMember(id, req.body);

    res.json(member);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function updateMemberStatus(req: Request, res: Response) {
  return res.json({
    test: "VERSION NOUVELLE",
    body: req.body,
  });
}
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        error: "Status manquant",
      });
    }

    const member = await memberService.updateMemberStatus(id, status);

    res.json(member);
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
}

export async function deleteMember(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    await memberService.deleteMember(id);

    res.json({
      success: true,
      message: "Membre supprimé avec succès.",
    });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}
