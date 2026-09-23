import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductDropdownListComponent } from './product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEventDetail } from './bài13/service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './bài13/service-product-image-event/service-product-image-event';

const routes: Routes = [
  {path:"", redirectTo:"service-product-image-event", pathMatch:"full"},
  {path:"learn-directive", component:ProductListComponent},
  {path:"product-dropdown-list", component:ProductDropdownListComponent},
  {path:"product-list-call-service", component:ProductListCallServiceComponent},
  {path:"product-list-call-http-service", component:ProductListCallHttpServiceComponent},
  {path:"product-http-handle-error-service", component:ProductHttpHandleErrorServiceComponent},
  {path:'service-product-image-event', component:ServiceProductImageEvent},
  {path:'service-product-image-event/:id', component:ServiceProductImageEventDetail},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
