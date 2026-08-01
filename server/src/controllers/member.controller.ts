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
export async function updateMemberStatus(req: Request, res: Response) {
  try {
    const id = String(req.params.id);
    const { status } = req.body;

    const member = await memberService.updateMemberStatus(id, status);

    res.json(member);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
}
