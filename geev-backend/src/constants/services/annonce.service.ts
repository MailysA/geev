import { Request, Response } from "express";

export class AnnonceService {

  public getAnnonces(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
  }

  public getAnnonce(req: Request, res: Response) {
    return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
  }
}