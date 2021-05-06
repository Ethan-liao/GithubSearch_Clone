import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-repos',
  templateUrl: './result-repos.component.html',
  styleUrls: ['./result-repos.component.scss']
})
export class ResultReposComponent implements OnInit {

  constructor() { }
  @Input() searchResult$: Observable<any>;
  ngOnInit(): void {
  }

}
