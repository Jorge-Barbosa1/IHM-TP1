import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recepie2Page } from './recepie2.page';

describe('Recepie2Page', () => {
  let component: Recepie2Page;
  let fixture: ComponentFixture<Recepie2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recepie2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
