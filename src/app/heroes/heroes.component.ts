import { Component } from '@angular/core';
import { Hero } from './hero';
import { UpperCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports:[
    UpperCasePipe
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
}