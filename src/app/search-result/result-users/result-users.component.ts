import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-result-users',
  templateUrl: './result-users.component.html',
  styleUrls: ['./result-users.component.scss']
})
export class ResultUsersComponent implements OnInit {

  constructor(private favoritesService: FavoritesService) { }

  @Input() searchResult$: Observable<any>;

  ngOnInit(): void {
  
  }
  addFav(item$:any) {
    let item;
    let temp = item$.subscribe(x=> {
      item = x;
      console.log('x',x);
      this.favoritesService.addItem(item) 
    })
    console.log('item',item);
    
   
    // temp.unsubscribe()
   }
}
