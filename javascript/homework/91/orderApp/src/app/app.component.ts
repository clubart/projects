import { Component } from '@angular/core';
import { Order } from './shared/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order';

  order: Order = {
    person: {
      firstName: 'Donald',
      lastName: 'Trump',
    address: {
      street: '1600 Pennsylvania Ave',
      city: 'Washington',
      state: 'D.C.',
      zip: '12345'
    }
  },
  date: '1/2/2020',
  item: {
    name: 'vase',
    price: 50
  }
}
}
