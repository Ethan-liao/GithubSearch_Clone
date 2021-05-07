import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-result-repos',
  templateUrl: './result-repos.component.html',
  styleUrls: ['./result-repos.component.scss']
})
export class ResultReposComponent implements OnInit {

  constructor(private favoritesService: FavoritesService) { }
  @Input() searchResult$: Observable<any>;
  ngOnInit(): void {
  }
  addFav(item) {
   this.favoritesService.addItem(item) 
  }
}
