import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomePage
      }
    ])
  ],
  declarations: [
    WelcomePage
  ],
  exports: [RouterModule]
})
export class WelcomePageModule { }
