import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs',
    template: `
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
                <ion-back-button></ion-back-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-tabs>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1">
                <ion-icon name="flash"></ion-icon>
                <ion-label>Tab One</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="tab2">
                <ion-icon name="flash"></ion-icon>
                <ion-label>Tab Two</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
    `
})
export class TabsPage { }
