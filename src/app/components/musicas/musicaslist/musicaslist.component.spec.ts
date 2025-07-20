import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaslistComponent } from './musicaslist.component';

describe('MusicaslistComponent', () => {
  let component: MusicaslistComponent;
  let fixture: ComponentFixture<MusicaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
