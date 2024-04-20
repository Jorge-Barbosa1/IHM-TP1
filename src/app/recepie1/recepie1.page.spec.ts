import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recepie1Page } from './recepie1.page';

describe('Recepie1Page', () => {
  let component: Recepie1Page;
  let fixture: ComponentFixture<Recepie1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recepie1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
