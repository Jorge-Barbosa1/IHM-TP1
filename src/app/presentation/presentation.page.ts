import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  public valor : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.valor = this.route.snapshot.paramMap.get('id');
  }

}
