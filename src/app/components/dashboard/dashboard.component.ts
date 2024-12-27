import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Product } from '../../models/product';
import { ShortTitlePipe } from '../../pipes/short-title.pipe';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ShortTitlePipe, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private _adminService:AdminService, private _matDialog:MatDialog) 
  {
    if(localStorage.getItem('allProducts') != null)
    {
      this.allProducts = JSON.parse(localStorage.getItem('allProducts')!);
    }
  }

  allProducts:Product[] = [];
  allCategories:string[] = [];
  currentProduct:number = 0;
  isShow:boolean = false;

  ngOnInit(): void 
  { 
    this.getProducts();
  }


  addProductForm:FormGroup = new FormGroup({
     title: new FormControl(''),
     price: new FormControl(''),
     image: new FormControl(''),
     category: new FormControl(''),
     description: new FormControl(''),
    })

  getProducts()
  {
    this._adminService.getAllProducts().subscribe({
      next:(res) => 
      {
        this.allProducts = res
        localStorage.setItem('allProducts', JSON.stringify(this.allProducts));
      }
    })
  }


  getAllCategories()
  {
    this._adminService.getCategories().subscribe({
      next:(res)=> this.allCategories = res
    })
  }
  
  deleteProduct(index:number)
  {
   this.allProducts.splice(index, 1);
   localStorage.setItem('allProducts', JSON.stringify(this.allProducts));
  }

  displayInputs()
  {
    this.isShow = true;
  }
  hideInputs()
  {
    this.isShow = false;
  }
  submitAddForm()
  {
    this._adminService.addNewProduct(this.addProductForm.value);
    this.isShow = false;
  }

  updateProduct(item:Product)
  {
    this.isShow = true;
    this.addProductForm.get('title')?.setValue(item.title);
    this.addProductForm.get('price')?.setValue(item.price);
    this.addProductForm.get('image')?.setValue(item.image);
    this.addProductForm.get('category')?.setValue(item.category);
    this.addProductForm.get('description')?.setValue(item.description);
    this.currentProduct = item.id
  }
  confirmUpdateProduct()
  {
    this._adminService.updateProduct(this.currentProduct, this.addProductForm.value).subscribe({
      next:(res) =>alert("Update Successfully")
    })
  }
  
}
