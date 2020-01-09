import { Component } from '@angular/core';
import Category from 'src/shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-app';

  categories: Category [] = [
    {
      name: 'freezer',
      items: [
        {
          name: 'pizza',
          price: 8.50
        },
        {
          name: 'ice cream',
          price: 10.50
        }
      ]
    },
    {
      name: 'produce',
      items: [
        {
          name: 'apples',
          price: 1.99
        },
        {
          name: 'oranges',
          price: 2.50
        }
      ]
    },
    {
      name: 'bakery'
    }
  ]
}
