import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from 'src/app/model/Annonce';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() public annonce: Annonce;

  constructor() { }

  ngOnInit(): void {
  }

}
