
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddProductDailogComponent } from './add-product-dailog/add-product-dailog.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'AngularCURDWithAngularMaterial';
  productLsit :any;
  constructor(private dialog :MatDialog, private apiservice : ApiService  ){


  }ngOnInit(): void {
    this.getAllProduct();
  }
;

  openDialog() {
    this.dialog.open(AddProductDailogComponent, {
      width:'40%'
      
    });
  }

  getAllProduct(){

   this.apiservice.getProduct().subscribe({
   next:(res)=>{
     debugger;
    this.productLsit = res;
    console.log(this.productLsit);
   },
   error:(err)=>{
alert("Error While Fatching the Records!");
   }
      



   })

  }
}
