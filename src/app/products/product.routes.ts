import { Routes, RouterModule } from "@angular/router";
import { StudentProductComponent } from "./product-types/student-product.component";
import { WorkingProfessionalProductComponent } from "./product-types/working-professional-product.component";
import { SmallBusinessProductComponent } from "./product-types/small-business-product.component";
import { OtherProductComponent } from "./product-types/other-product.component";
import { ProductsComponent } from "./products.component";

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ProductsComponent, children: [
    { path: '', component: StudentProductComponent,  pathMatch: 'full' },
    { path: 'student', component: StudentProductComponent },
    { path: 'working', component: WorkingProfessionalProductComponent },
    { path: 'business', component: SmallBusinessProductComponent },
    { path: 'other', component: OtherProductComponent },
  ]}
];

export const productsRouting = RouterModule.forChild(PRODUCTS_ROUTES);