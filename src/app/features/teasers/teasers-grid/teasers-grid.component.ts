import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { CategoriesService } from 'src/app/shared/services/categories/categories.service';

@Component({
  selector: 'app-teasers-grid',
  templateUrl: './teasers-grid.component.html',
  styleUrls: ['./teasers-grid.component.css']
})
export class TeasersGridComponent implements OnInit {

  categories:Category[];

  constructor(
    private categoriesService: CategoriesService
  ) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories()
  }

  async getCategories(){
    try{
      const response = await this.categoriesService.getCategories();
      this.categories = response.docs;
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }

}
