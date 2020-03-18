// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, h, Host } from '@stencil/core';
import { Food } from '../../interfaces/food';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  private foods: Food[] = [
    {
      id: '1',
      name: 'apple',
      serial: '101'
    },
    {
      id: '2',
      name: 'banana',
      serial: '101'
    },
    {
      id: '3',
      name: 'apple',
      serial: '102'
    }
  ];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          {this.foods.map(x => (
            <ion-card>
              <ion-item>
                <ion-icon name="pin" slot="start"></ion-icon>
                <ion-label>{x.name} in a card</ion-label>
                <ion-button
                  fill="outline"
                  slot="end"
                  href={`/profile/${[x.name, x.serial].join('-')}`}
                  routerDirection="forward"
                >
                  View
                </ion-button>
              </ion-item>
            </ion-card>
          ))}
        </ion-content>
      </Host>
    );
  }
}
