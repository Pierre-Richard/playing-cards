import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  monsters: Monster[];
  search = '';
  count: number = 0;
  selectedMonsterIndex = signal(1);
  constructor() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = 'Pick';
    monster1.hp = 40;
    monster1.figureCaption = 'N°002 Pik';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = 'Car';
    monster2.image = 'assets/img/pokemonees-689803_640.png';
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = 'N°003 ar';
    this.monsters.push(monster2);
  }
  increaseCount(): number {
    return this.count++;
  }
  toggleMonster() {
    this.selectedMonsterIndex.set(
      (this.selectedMonsterIndex() + 1) % this.monsters.length
    );
  }
}
