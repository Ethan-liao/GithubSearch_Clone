import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-users',
  templateUrl: './result-users.component.html',
  styleUrls: ['./result-users.component.scss']
})
export class ResultUsersComponent implements OnInit, OnDestroy {

  constructor() { }
  @Input() searchUserResult$: Observable<any>;

  ngOnInit(): void {
  
  }

  ngOnDestroy(){}

}
