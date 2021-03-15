import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from '../layout/components/parent/parent.component';
import{MainpageComponent} from '../smoke-free/mainpage/mainpage.component';
const routes: Routes = [
  {
    path:'',
    component: ParentComponent,
    children : [
      {
        path : '', component : MainpageComponent
      },
    ]
},
        ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmokeFreeRoutingModule { }
