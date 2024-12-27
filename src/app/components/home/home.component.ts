import { Product } from '../../models/product';
import { ShortTitlePipe } from '../../pipes/short-title.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShortTitlePipe, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private _userService:UserService) {}

  categories:string[] = [];
  products:Product[] = [];
  isLoading:boolean = false;

  ngOnInit(): void 
  {
    this.getAllCategories();
    this.getProducts();
  }

  getAllCategories()
  {
    this._userService.getCategories().subscribe({
      next:(res) => this.categories = res
    })
  }

  getProducts()
  {
    this.isLoading = false;
    this._userService.getAllProducts().subscribe({
      next:(res) => 
      {
        this.isLoading = true;
        this.products = res
      }
    })
  }

  getSpecificProducts(categoryName:any)
  {
    this.isLoading = false;
     let value = categoryName.target.value;
     value == 'All'? this.getProducts(): this._userService.getProductsByCategory(categoryName.target.value).subscribe({
      next:(res) => 
      {
        this.isLoading = true;
        this.products = res
      }
    })
  }

}
