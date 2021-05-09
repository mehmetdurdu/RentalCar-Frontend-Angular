import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: string[] = ['car', 'brand', 'color', 'rent', 'user'];

  currentCategory: string = 'Car';

  constructor() {}

  ngOnInit(): void {}

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  getCurrentCategory(category: string) {
    if (category == this.currentCategory) {
      return 'nav-link active';
    } else {
      return 'nav-link';
    }
  }

}
