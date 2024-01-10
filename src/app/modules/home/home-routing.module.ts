import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PulpitComponent } from './components/pulpit/pulpit.component';

const routes: Routes = [{ path: 'pulpit', component: PulpitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
