import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { ResultUsersComponent } from './result-users/result-users.component';
import { ResultReposComponent } from './result-repos/result-repos.component';



@NgModule({
  declarations: [
    ResultUsersComponent,
    ResultReposComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
