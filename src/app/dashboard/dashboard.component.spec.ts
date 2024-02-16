import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [ // Provide HeroService here
        { provide: HeroService, useValue: { getHeroes: () => of([]) } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    heroService = TestBed.inject(HeroService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHeroes on ngOnInit', () => {
    const getHeroesSpy = spyOn(component, 'getHeroes');
    component.ngOnInit();
    expect(getHeroesSpy).toHaveBeenCalled();
  });

  it('should update heroes when getHeroes is called', () => {
    const heroService = TestBed.inject(HeroService);
    const mockHeroes = [{ id: 1, name: 'Test' }, { id: 2, name: 'Test 2' }, { id: 3, name: 'Test 3' }, { id: 4, name: 'Test 4' }, { id: 5, name: 'Test 5' }];
    spyOn(heroService, 'getHeroes').and.returnValue(of(mockHeroes));
    component.getHeroes();
    expect(component.heroes).toEqual(mockHeroes.slice(1, 5));
  });

});
