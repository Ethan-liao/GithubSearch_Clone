import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result-users',
  templateUrl: './result-users.component.html',
  styleUrls: ['./result-users.component.scss']
})
export class ResultUsersComponent implements OnInit, OnDestroy {
  resultListener: any;
  pageCount: number;

  constructor() { }
  @Input() searchUserResult$: Observable<any>;

  ngOnInit(): void {
    this.resultListener = this.searchUserResult$.subscribe(res => {
      this.pageCount = res.total/10;
      console.log('page', this.pageCount);
      
    })
  }

  ngOnDestroy(){
    this.resultListener.unsubsubscribe()
  }

}
