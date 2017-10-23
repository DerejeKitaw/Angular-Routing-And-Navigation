import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule //add this module for angular4 
  ],
  declarations: [HeroListComponent],
  exports:[HeroListComponent],
  providers: [ HeroService ]
})
export class HeroesModule { }

