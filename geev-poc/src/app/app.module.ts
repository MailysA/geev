import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './annonces/detail/detail.component';
import { ListComponent } from './annonces/list/list.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
export const appRoutes: Routes = [
  { path: 'annonces', component: ListComponent },
  { path: 'annonces/:id', component: DetailComponent },
  { path: '',
    redirectTo: '/annonces',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
