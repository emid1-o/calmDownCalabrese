import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasdetailsComponent } from './artistasdetails.component';

describe('ArtistasdetailsComponent', () => {
  let component: ArtistasdetailsComponent;
  let fixture: ComponentFixture<ArtistasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
