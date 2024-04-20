import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {
  public valor : any;

  constructor(private route : ActivatedRoute, private router : Router ) { }

  ngOnInit() {
    this.valor = this.route.snapshot.paramMap.get('id');
  }

  public recepie1(){
    this.router.navigateByUrl('/recepie1/123');
  }
  public recepie2(){
    this.router.navigateByUrl('/recepie2/123');
    }
  public recepie3(){
    this.router.navigateByUrl('/recepie3/123');
  }
}
