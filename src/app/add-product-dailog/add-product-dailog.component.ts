import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-product-dailog',
  templateUrl: './add-product-dailog.component.html',
  styleUrls: ['./add-product-dailog.component.scss']
})
export class AddProductDailogComponent implements OnInit {
 ProductForm !: FormGroup;
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productCategoryList =['Furits','Vagetables','Electronics']
  constructor(private formBuilder : FormBuilder , private apiService : ApiService, private dialogRef : MatDialogRef<AddProductDailogComponent>) { }

  ngOnInit(): void {

   this.ProductForm =this.formBuilder.group({

    ProductName : ['',Validators.required],
    ProductCategory:['',Validators.required],
    fresh:['',Validators.required],
    price:['',Validators.required],
    comment: ['',Validators.required],
    date: ['',Validators.required]
   });

    }

   
   SaveProduct(){
debugger;
    this.apiService.postProduct(this.ProductForm.value).subscribe({
next:(res=>{

  alert("Product Add Successfully");
  this.ProductForm.reset(); 
  this.dialogRef.close('Save');
}),
error:()=>{

  alert("While Adding the Product!");
}


    })
 

    };

}
