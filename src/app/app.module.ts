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
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ShortenNumPipe } from './pipes/shorten-num.pipe';
import { ResultCommitsComponent } from './search-result/result-commits/result-commits.component';
import { ResultTopicsComponent } from './search-result/result-topics/result-topics.component';
import { FavoritesService } from './services/favorites.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchResultComponent,
    ResultReposComponent,
    ResultUsersComponent,
    ResultCommitsComponent, 
    ResultTopicsComponent,
    ShortenNumPipe,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ResultReposComponent,
    ResultUsersComponent
  ],
  providers: [SearchService,FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
