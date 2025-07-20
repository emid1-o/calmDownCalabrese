import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicasdetailsComponent } from './musicasdetails.component';

describe('MusicasdetailsComponent', () => {
  let component: MusicasdetailsComponent;
  let fixture: ComponentFixture<MusicasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicasdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
