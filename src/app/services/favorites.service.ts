import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor() { }
  public currentArr = []
  private _lastUpdate = new BehaviorSubject([])

  addItem(item){
    this.currentArr.push(item)
    this._lastUpdate.next(this.currentArr);
    console.log('current arr', this.currentArr);
    
  }
  getList(){
    return this._lastUpdate.asObservable();
  }


}
