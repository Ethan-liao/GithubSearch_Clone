import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  currentSearchType: string;
 
 public get searchInput() : FormGroup {
   return <FormGroup> this.resultsFg.get('searchInput')
 }
 
  constructor(private fb: FormBuilder,private searchService: SearchService<any>) { 
    this.currentSearchType = "repositories"

  }
  
  searchResult$ = this.searchService.getResult();
  resultListener: any;
  pageCount: number;
  
  resultsFg = this.fb.group({
    searchInput:''
    // repos:'',
    // code:'',

    // users:'',
    // wikis:'',

  })
  page = 1
  ngOnInit(): void {
    if(this.searchService.savedUserInput){
      this.searchInput.setValue(this.searchService.savedUserInput)
    }
    this.resultListener = this.searchResult$.subscribe(res => {
      this.pageCount = res.total > 10000 ? 1000 : res.total;

      
    })
  };

  searchForPage(){
    setTimeout(() => {
      
      if (this.page) {
        console.log('search for page hit', this.page);
        
        this.searchService.search(this.currentSearchType,this.searchInput.value, this.page.toString()).subscribe();
      }
    }, 0);
  }

  searchItem(searchType?: string){
    const inputValue =  this.resultsFg.get('searchInput')?.value;
    if (searchType) {
      this.currentSearchType = searchType
    } 
    this.searchService.search(this.currentSearchType,inputValue).subscribe();
    
     
  }
}
