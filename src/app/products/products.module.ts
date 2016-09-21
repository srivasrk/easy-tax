import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductsComponent} from "./products.component";
import { SmallBusinessProductComponent } from "./product-types/small-business-product.component";
import { OtherProductComponent } from "./product-types/other-product.component";
import { WorkingProfessionalProductComponent } from "./product-types/working-professional-product.component";
import { StudentProductComponent } from "./product-types/student-product.component";
import { productsRouting } from "./product.routes";

@NgModule({
    declarations: [
        ProductsComponent,
        SmallBusinessProductComponent,
        OtherProductComponent,
        WorkingProfessionalProductComponent,
        StudentProductComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        productsRouting
    ]
})

export default class ProductsModule { }