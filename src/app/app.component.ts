import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  monster1!: Monster;
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Pick";
    this.monster1.hp = 40;
    this.monster1.figureCaption = "N°002 Pik"
  }
  count: number = 0
  increaseCount():number {
  return this.count++
}
}
