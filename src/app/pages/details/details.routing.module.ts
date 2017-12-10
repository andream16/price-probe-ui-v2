import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** App Components **/
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DetailsComponent
      }
    ])
  ], exports: [RouterModule]
})

export class DetailsRoutingModule { }
