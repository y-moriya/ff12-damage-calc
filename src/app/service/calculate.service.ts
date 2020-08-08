import { Injectable } from '@angular/core';
import { Character } from './../model/character';
import { WeaponType } from './../enum/weapon-type.enum';
import { Formula } from './../enum/formula.enum';
import { IResult } from './../interface/iresult';

@Injectable()
export class CalculateService {
  constructor(
    
  ) { }

  public calculate(attacker: Character, defender: Character): IResult {
    let result: IResult;
    switch (attacker.weapon.formula) {
      case Formula.Strength:
        attacker.status.attackPower = attacker.status.strength + attacker.weapon.attack;
        const min = (attacker.status.attackPower - defender.status.defense) * (1 + attacker.status.strength * (attacker.status.level + attacker.status.strength) / 256);
        const max = (attacker.status.attackPower * 1.125 - defender.status.defense) * (1 + attacker.status.strength * (attacker.status.level + attacker.status.strength) / 256);
        result = {min: min, max: max};
        break;
      default:
        break;
    }
    return result;
  }
}