import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllArchivesComponent } from './get-all-archives.component';

describe('GetAllArchivesComponent', () => {
  let component: GetAllArchivesComponent;
  let fixture: ComponentFixture<GetAllArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
