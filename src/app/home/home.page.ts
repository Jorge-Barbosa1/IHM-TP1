import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router){}

  public presentation()
  {
    this.router.navigateByUrl('/presentation/123');
  }
  
  public recepies()
  {
    this.router.navigateByUrl('/recepies/123');
  }
  public curiosities()
  {
    this.router.navigateByUrl('/curiosities/123');
  }
  
}
