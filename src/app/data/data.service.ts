import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // check out https://putsreq.com/ to create a request end point 
    return this.http.post('https://putsreq.com/608dJ78P9JLY2vBZTEJP', userSettings);

    //return of(userSettings);
  }

}
