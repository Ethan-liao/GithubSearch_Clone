import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private fb: FormBuilder,private searchService: SearchService<any>) { }
  searchTypes = [
    
  ]
  searchResult$ = this.searchService.getResult();
  resultsFg = this.fb.group({
    searchInput:''
    // repos:'',
    // code:'',

    // users:'',
    // wikis:'',

  })
  ngOnInit(): void {
    
  }
  searchItem(){}
}
