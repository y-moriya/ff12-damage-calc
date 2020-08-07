import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CharacterService } from './service/character.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculateService } from './service/calculate.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ResultComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CharacterService, CalculateService]
})
export class AppModule { }
