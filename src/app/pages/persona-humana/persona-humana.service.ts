import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaHumanaI } from './persona-humana.interce';

@Injectable({
  providedIn: 'root'
})
export class PersonaHumanaService {

  private readonly _http = inject(HttpClient);

  getPersonaHumana(): Observable<PersonaHumanaI> {
    return this._http.get<PersonaHumanaI>('/persona-humana.json');
  }
}
