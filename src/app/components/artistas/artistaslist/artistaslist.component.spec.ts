import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaslistComponent } from './artistaslist.component';

describe('ArtistaslistComponent', () => {
  let component: ArtistaslistComponent;
  let fixture: ComponentFixture<ArtistaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistaslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
