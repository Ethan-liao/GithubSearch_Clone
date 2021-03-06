import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FavoritesService } from '../services/favorites.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  currentSearchType: string;

  public get searchInput(): FormGroup {
    return <FormGroup>this.resultsFg.get('searchInput');
  }

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService<any>,
    private router: Router,
    private favoriteService: FavoritesService

  ) {
    this.currentSearchType = 'repositories';
  }

  searchResult$ = this.searchService.getResult();
  favorites$ = this.favoriteService.getList();
  resultListener: any;
  pageCount: number;

  resultsFg = this.fb.group({
    searchInput: '',
    // repos:'',
    // code:'',
    // users:'',
    // wikis:'',
  });
  page = 1;
  ngOnInit(): void {
    if (this.searchService.savedUserInput) {
      this.searchInput.setValue(this.searchService.savedUserInput);
    }
    this.resultListener = this.searchResult$.subscribe((res) => {
      if(!res.total) {
        this.router.navigateByUrl('/search');
      }
      this.pageCount = res.total > 10000 ? 1000 : res.total;
    });
  }
  delete(index){
    this.favoriteService.deleteItem(index)
  }
  searchForPage() {
    setTimeout(() => {
      if (this.page) {
        this.searchService
          .search(
            this.currentSearchType,
            this.searchInput.value,
            this.page.toString()
          )
          .subscribe();
      }
    }, 0);
  }

  searchItem(searchType?: string) {
    const inputValue = this.resultsFg.get('searchInput')?.value;
    if (searchType) {
      this.currentSearchType = searchType;
    }
    if (searchType === 'commits'){
      this.searchService.search(this.currentSearchType, inputValue, undefined , 'application/vnd.github.cloak-preview').subscribe();
    } else if (searchType === 'topics'){
      this.searchService.search(this.currentSearchType, inputValue, undefined , 'application/vnd.github.mercy-preview+json').subscribe();
    } else if(searchType === 'users'){
      this.searchService.search(this.currentSearchType, inputValue).subscribe();
    } else {
      this.searchService.search(this.currentSearchType, inputValue).subscribe();
    }
  }
}
