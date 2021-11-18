import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import {MenuComponent} from "./menu/menu.component";

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
    ],
    declarations: [MenuComponent],
    exports: [
      MenuComponent
    ]
  })
  export class MenuModule {}