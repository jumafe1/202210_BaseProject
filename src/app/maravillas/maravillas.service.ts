import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { maravillas } from './maravillas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaravillasService {
 private apiURL = environment.baseURL;

constructor(private http: HttpClient) { }

getCourses (): Observable <maravillas[]>{

  return this.http.get<maravillas[]>(this.apiURL);

}

}
