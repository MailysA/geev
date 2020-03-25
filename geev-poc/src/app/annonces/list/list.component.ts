import { Component, OnInit } from '@angular/core';
import { AnnoncesService } from 'src/app/shared/annonces.service.js';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/model/Annonce';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  annonces: Array<any> = [];
  annoncesData: Array<any> = [];
  pageNumber: string = '20';
  limit: string = '20';

  constructor(private annoncesService: AnnoncesService, private router: Router) { 
  }
  
  ngOnInit(): void {
    this.getAnnonces()
  }
  
  getAnnonces(): any {
    return this.annoncesService.getAnnonces(this.pageNumber, this.limit)
    .subscribe(annonces => {
          this.annoncesData.push(annonces)
    })
  }

  getDetail(currentAnnonce: Annonce){
    this.router.navigate(['/annonces/'+ currentAnnonce.id, { currentAnnonce }]);
  }

}
