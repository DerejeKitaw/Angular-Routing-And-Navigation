import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, //add this module for angular4 
    HeroRoutingModule
  ],
  declarations: [HeroListComponent, HeroDetailComponent],
  exports:[HeroListComponent],
  providers: [ HeroService ]
})
export class HeroesModule { }

