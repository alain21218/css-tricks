import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClearfixComponent } from './clearfix/clearfix.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ROUTES } from '../config/router.config';
import { AnimComponent } from './anim/anim.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { PositionComponent } from './position/position.component';
import { VariableComponent } from './variable/variable.component';
import { CenterComponent } from './center/center.component';
import { SelectorComponent } from './selector/selector.component';
import { MediaComponent } from './media/media.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, ClearfixComponent, NavbarComponent, AnimComponent, PseudoComponent, PositionComponent, VariableComponent, CenterComponent, SelectorComponent, MediaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
