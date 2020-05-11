import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityRankingService {
  ranking = new ReplaySubject<any[]>(1);
  national = new ReplaySubject<any>(1);

  constructor(private http: HttpClient) {
    this.http.get('/data/city_rankings.json')
      .pipe(
        catchError(() => {
          return this.http.get('https://avid-covider.phonaris.com/data/city_rankings.json');
        })
      ).subscribe((data: any[]) => {
        this.national.next(data[0]);
        this.ranking.next(data.slice(1, 16));
      });
  }
}
