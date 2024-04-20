import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recepie1',
  templateUrl: './recepie1.page.html',
  styleUrls: ['./recepie1.page.scss'],
})
export class Recepie1Page implements OnInit {

  public valor : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.valor = this.route.snapshot.paramMap.get('id');

  }

}
