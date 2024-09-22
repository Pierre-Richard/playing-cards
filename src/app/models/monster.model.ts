import { MonsterType } from '../utils/monster.utils';

export class Monster {
  name: string = 'My Monster';
  image: string = 'assets/img/pokemon-5426712_640.png';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 40;
  figureCaption: string = 'N°001 Monster';

  attackName: string = 'Geo Impact';
  attackStrength: number = 60;
  attackDescription: string = 'This is a long description...';
}
