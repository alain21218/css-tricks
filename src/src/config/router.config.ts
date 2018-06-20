import { Routes } from '@angular/router';
import { ClearfixComponent } from '../app/clearfix/clearfix.component';
import { AnimComponent } from '../app/anim/anim.component';
import { PseudoComponent } from '../app/pseudo/pseudo.component';
import { PositionComponent } from '../app/position/position.component';
import { VariableComponent } from '../app/variable/variable.component';
import { CenterComponent } from '../app/center/center.component';
import { SelectorComponent } from '../app/selector/selector.component';
import { MediaComponent } from '../app/media/media.component';
import { BootstrapComponent } from '../app/bootstrap/bootstrap.component';
import { SassComponent } from '../app/sass/sass.component';
import { PrintComponent } from '../app/print/print.component';

export const ROUTES: Routes = [
  { path: "", redirectTo:'anim', pathMatch: 'full' },
  { path: "clearfix", component: ClearfixComponent },
  { path: "anim", component: AnimComponent },
  { path: "pseudo", component: PseudoComponent },
  { path: "position", component: PositionComponent },
  { path: "variable", component: VariableComponent },
  { path: "center", component: CenterComponent },
  { path: "selector", component: SelectorComponent },
  { path: "media", component: MediaComponent },
  { path: "bootstrap", component: BootstrapComponent },
  { path: "sass", component: SassComponent },
  { path: "print", component: PrintComponent },
]