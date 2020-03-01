import { Application } from 'express';
import { AnnonceService } from '../services/annonce.service';

export class Controller {
  private annonceService: AnnonceService;

  constructor(private app: Application) {
    this.annonceService = new AnnonceService();
    this.routes();
  }

  public routes() {

    this.app.route('/annonces').get(this.annonceService.getAnnonces);

    this.app.route('/annonces/:id').get(this.annonceService.getAnnonce)
  }
}