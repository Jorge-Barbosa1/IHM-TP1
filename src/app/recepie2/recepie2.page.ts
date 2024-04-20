import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recepie2',
  templateUrl: './recepie2.page.html',
  styleUrls: ['./recepie2.page.scss'],
})
export class Recepie2Page implements OnInit {
  public valor : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.valor = this.route.snapshot.paramMap.get('id');
  }

}
