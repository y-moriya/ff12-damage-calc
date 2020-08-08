import { WeaponType } from "../enum/weapon-type.enum";
import { Formula } from "../enum/formula.enum";

export class Weapon {
  name: string;
  weaponType: WeaponType;
  formula: Formula;
  attack: number;
  magickPower: number;
  vitality: number;
  speed: number;
  ct: number;
  criticalLate: number;
  // element: Element;
}