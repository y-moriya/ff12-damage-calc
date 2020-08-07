import { Component, VERSION } from '@angular/core';
import { Character } from './model/character';
import { CharacterService } from './service/character.service';
import { CalculateService } from './service/calculate.service';
import { IResult } from './interface/iresult';
import { WeaponType } from './enum/weapon-type.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  public monsters: Character[] = [];
  public players: Character[] = [];

  constructor (
    private characterService: CharacterService,
    private calculateService: CalculateService
  ) { }

  getMonsters() {
    this.characterService.getMonsters()
      .subscribe(monsters => this.monsters = monsters);
  }

  getPlayers() {
    this.characterService.getPlayers()
      .subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
    this.getMonsters();
  }

  public calculate(attacker: Character, defender: Character): IResult {
    this.players[0].weaponType = WeaponType.Sword;
    this.players[0].status.attackPower = this.players[0].status.strength + 14;
    return this.calculateService.calculate(attacker, defender);
  }
}
