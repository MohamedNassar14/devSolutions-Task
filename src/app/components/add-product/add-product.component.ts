import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  constructor() 
  {
    if(localStorage.getItem('allProducts') != null)
      {
        this.allProducts = JSON.parse(localStorage.getItem('allProducts')!);
      }
  }

  allProducts:Product[] = [];

  addProductForm:FormGroup = new FormGroup({
    name: new FormControl('')
  })

  submit()
  {
    // console.log(this.addProductForm.value);

    this.allProducts.push(this.addProductForm.value)
    console.log(this.allProducts);

  }

}
