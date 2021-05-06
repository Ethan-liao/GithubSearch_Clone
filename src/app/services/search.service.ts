import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface SearchTypes {
  repositories: State;
  code: State;
  commits: State;
  issues: State;
  discussions: State;
  packages: State;
  marketplace: State;
  topics: State;
  wikis: State;
  users: State;
}
export interface State {
  value: {};
  type: string;
  total: number | string;
}
@Injectable({
  providedIn: 'root',
})
export class SearchService<T> {
  public lastUpdate: SearchTypes = {
    repositories: {
      value: '',
      type: 'repositories',
      total: 0,
    },
    code: {
      value: '',
      type: 'code',
      total: 0,
    },
    commits: {
      value: '',
      type: 'commits',
      total: 0,
    },
    issues: {
      value: '',
      type: 'issues',
      total: 0,
    },
    discussions: {
      value: '',
      type: 'discussions',
      total: 0,
    },
    packages: {
      value: '',
      type: 'packages',
      total: 0,
    },
    marketplace: {
      value: '',
      type: 'marketplace',
      total: 0,
    },
    topics: {
      value: '',
      type: 'topics',
      total: 0,
    },
    wikis: {
      value: '',
      type: 'wikis',
      total: 0,
    },
    users: {
      value: '',
      type: 'users',
      total: 0,
    },
  };
  private _updates = new BehaviorSubject<any>({});

  private readonly _url = 'https://api.github.com/search/';
  public savedUserInput: any;

  constructor(private http: HttpClient, private router: Router) {}

  search(searchType: string, input: string, pageNum?: string) {
    this.savedUserInput = input;
    const paramsObj = this.setupHeader(input, pageNum);

    return this.http
      .get(`${this._url}${searchType}`, { params: paramsObj })
      .pipe(
        tap((x) => {
          if (x) {
            if (searchType === 'users') {
              this.lastUpdate[searchType].value = this.findUserInfo(x);
            } else {
              this.lastUpdate[searchType].value = x;
            }
            this.lastUpdate[searchType].total = x['total_count'];
            this._updates.next(this.lastUpdate[searchType]);
            this.router.navigateByUrl('/result');
          }
        })
      );
  }

  setupHeader(input, pageNumb?: string) {
    if (pageNumb) {
      return new HttpParams()
        .set('q', input)
        .set('per_page', '10')
        .set('page', pageNumb);
    } else {
      return new HttpParams().set('q', input).set('per_page', '10');
    }
  }

  searchUsers(url) {
    return this.http.get(url).pipe(
      map((x) => x),
      catchError(this.handleError)
    );
  }

  // handlError is not my code
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  findUserInfo(resObj) {
    let result = resObj.items.map((item) => {
      return this.searchUsers(item.url);
    });
    return result;
  }

  getResult() {
    return this._updates.asObservable();
  }

  update(val: any) {
    this._updates.next(val);
  }
}
