import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
 
 public get searchInput() : FormGroup {
   return <FormGroup> this.resultsFg.get('searchInput')
 }
 
  constructor(private fb: FormBuilder,private searchService: SearchService<any>) { }
  
  searchResult$ = this.searchService.getResult();
  resultsFg = this.fb.group({
    searchInput:''
    // repos:'',
    // code:'',

    // users:'',
    // wikis:'',

  })
  ngOnInit(): void {
    if(this.searchService.savedUserInput){
      this.searchInput.setValue(this.searchService.savedUserInput)
    }
  };

  
  searchItem(searchType?: string){
    const inputValue =  this.resultsFg.get('searchInput')?.value;
    if (searchType) {
      console.log('searchType hit',searchType);
      
      this.searchService.search(searchType,inputValue).subscribe();
    } else {
      console.log('searchType else hit',searchType);
      this.searchService.search("repositories",inputValue).subscribe();
    };
    
     
  }
}
