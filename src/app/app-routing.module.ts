import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./search-bar/search-bar.module').then(m => m.SearchBarModule)
  }, {
    path: 'result',
    loadChildren: () => import('./search-result/search-result.module').then(m => m.SearchResultModule)
  },
  { path: '', redirectTo: 'search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
