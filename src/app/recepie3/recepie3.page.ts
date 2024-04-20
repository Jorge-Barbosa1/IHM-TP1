import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recepie3',
  templateUrl: './recepie3.page.html',
  styleUrls: ['./recepie3.page.scss'],
})
export class Recepie3Page implements OnInit {
  public valor : any; 
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.valor = this.route.snapshot.paramMap.get('id');
  }

}
