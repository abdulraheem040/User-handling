import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './Form_data/Form_data';
import { UserTableComponent } from './user_table/user_table';

const routes: Routes = [
  { path: 'Users/:id', component: UserFormComponent },
  { path: 'Users', component: UserTableComponent },
  { path: '**', component: UserTableComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
