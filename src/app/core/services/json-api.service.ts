import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from '../data/movie.json';

@Injectable({
  providedIn: 'root'
})

export class JsonApiService {
  get(url: string): Observable<any> {
    switch (url) {
      case '/movies':
        return of(data);
      default:
        const id: number = +url.substring(url.lastIndexOf('/') + 1);
        const jsonData = data.find(opt => opt.id == id)
        return of(jsonData);
    }
  }
}
