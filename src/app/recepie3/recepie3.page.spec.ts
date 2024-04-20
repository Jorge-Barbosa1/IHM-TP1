import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recepie3Page } from './recepie3.page';

describe('Recepie3Page', () => {
  let component: Recepie3Page;
  let fixture: ComponentFixture<Recepie3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Recepie3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
