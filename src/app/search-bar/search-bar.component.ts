import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  constructor(private fb: FormBuilder,private searchService: SearchService<any>) { }
  searchFg: FormGroup = this.fb.group({
    userInput: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  searchItem() {
    const inputValue =  this.searchFg.get('userInput')?.value;
    this.searchService.search('repositories',inputValue).subscribe();
    
     
  }

}
