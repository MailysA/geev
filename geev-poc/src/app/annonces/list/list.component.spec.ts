import { fakeAsync, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { ListComponent } from './list.component';
import { AnnoncesService } from 'src/app/shared/annonces.service';
import { ActivatedRoute } from '@angular/router';

import { appRoutes } from "./../../app.module";

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [ ListComponent ], providers: [ AnnoncesService, ActivatedRoute]
    })
    .compileComponents();


    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(ListComponent);
    router.initialNavigation();

  }));

  it('should get list annonces', () => {
    /* Given */
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    /* When */

    /* Then */
    expect(component.getAnnonces()).toHaveBeenCalled()
  });

  xit('should rediect on detail annonce', fakeAsync (() => {

    router.navigate(["/annonces/1"]).then(() => {
      expect(location.path()).toBe("/annonces/1");
    });
  }));

});
