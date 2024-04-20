import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuriositiesPage } from './curiosities.page';

describe('CuriositiesPage', () => {
  let component: CuriositiesPage;
  let fixture: ComponentFixture<CuriositiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuriositiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
