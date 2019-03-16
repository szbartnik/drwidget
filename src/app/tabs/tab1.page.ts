import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    template: `
    <ion-header>
        <ion-toolbar>
            <ion-title>Tab 1</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <div>Tab1</div>
        <ion-button (click)="presentToast()">Dupa</ion-button>
    </ion-content>
    `
})
export class Tab1Page {
    constructor(public toastController: ToastController) { }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Your settings have been saved.',
            showCloseButton: true,
            closeButtonText: 'Done',
            duration: 2000
        });
        toast.present();
    }
}