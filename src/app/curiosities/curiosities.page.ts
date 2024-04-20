import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curiosities',
  templateUrl: './curiosities.page.html',
  styleUrls: ['./curiosities.page.scss'],
})
export class CuriositiesPage implements OnInit {

  public valor : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.valor = this.route.snapshot.paramMap.get('id');
  }
  

}
