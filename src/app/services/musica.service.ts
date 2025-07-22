import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../models/musica';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/musica";

  constructor() { }

  findAll(): Observable<Musica[]>{

    return this.http.get<Musica[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<String> {

    return this.http.delete<String>(this.API+"/delete/" + id, {responseType: 'text' as 'json'});
  }
}
