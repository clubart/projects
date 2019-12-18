import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myHomeworkApp';
  person = {
    firstName: 'Donald', lastName: 'Trump',
    address: { street: '1600 Penselvania Ave.', city: 'District of Colombia', zip: 88484 }
  };
}
