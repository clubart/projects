import { Component, Input } from '@angular/core';
import Category from 'src/shared/category';
import Item from 'src/shared/item';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  {
  @Input()
  categories: Category []

  selected: Category;

  showItems(selectedCategory: string){
    this.selected = this.categories.find(category => category.name === selectedCategory);
    console.log(this.selected);
  }
}
