import { Status } from './status';
import { AttackOption, MagickOption, AtkDefenseOption, MagDefenseOption } from './options';
import { WeaponType } from '../enum/weapon-type.enum';

export class Character {
  name: string;
  isEnemy: boolean;
  status: Status;
  weaponType: WeaponType;
  attackOption: AttackOption;
  magickOption: MagickOption;
  atkDefenseOption: AtkDefenseOption;
  magDefenseOption: MagDefenseOption;
}