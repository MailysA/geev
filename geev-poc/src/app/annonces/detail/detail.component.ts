import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from 'src/app/model/Annonce';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  public annonce : Annonce;

  constructor( private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(annonce => {
      console.log(annonce.get('annonce'))
    });
  }

}
