import { Injectable } from '@angular/core';
import { Character } from './../model/character';
import { WeaponType } from './../enum/weapon-type.enum';
import { IResult } from './../interface/iresult';

@Injectable()
export class CalculateService {
  constructor(
    
  ) { }

  public calculate(attacker: Character, defender: Character): IResult {
    if (attacker.weaponType === WeaponType.Sword) {
      const min = (attacker.status.attackPower - defender.status.defense) * (1 + attacker.status.strength * (attacker.status.level + attacker.status.strength) / 256);
      const max = (attacker.status.attackPower * 1.125 - defender.status.defense) * (1 + attacker.status.strength * (attacker.status.level + attacker.status.strength) / 256);
      return {min: min, max: max}
    }
    else {
      return {min: 10, max: 0};
    }
  }
}