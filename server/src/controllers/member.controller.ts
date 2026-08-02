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
    console.log("METHOD :", req.method);
    console.log("HEADERS :", req.headers);
    console.log("BODY :", req.body);

    const id = String(req.params.id);

    if (!req.body) {
      return res.status(400).json({
        error: "Body vide",
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
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        error: "Le statut est obligatoire.",
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
