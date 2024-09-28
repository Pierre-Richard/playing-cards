import { Component, computed, inject, model, signal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterService } from '../../services/monster/monster.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [SearchBarComponent, PlayingCardComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css',
})
export class MonsterListComponent {
  monsters = signal<Monster[]>([]);
  search = model('');
  monsterService = inject(MonsterService);
  filteredMonsters = computed(() => {
    return this.monsters().filter((monster) =>
      monster.name.includes(this.search())
    );
  });

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }
  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
}
