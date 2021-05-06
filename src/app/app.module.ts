import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultReposComponent } from './search-result/result-repos/result-repos.component';
import { ResultUsersComponent } from './search-result/result-users/result-users.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultComponent,
    ResultReposComponent,
    ResultUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ResultReposComponent,
    ResultUsersComponent
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
