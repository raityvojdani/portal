import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SportField } from '../models/sport-field';
import { SportSubField } from '../models/sub-sport-field';
import { ISportFieldName } from "../models/ISportFieldName";
import { ISportSubFieldName } from "../models/ISportSubFieldName";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JamRepositoryService {
  private readonly _url = environment.url + "/api/v1/account/jam";
  constructor (private readonly _http: HttpClient) { }
  getSportName(field: SportField) {
    return this._http.post<ISportFieldName>(this._url + '/field-name', { field }).pipe(map(c => c.fieldName));
  }
  getSubSportName(subField: SportSubField) {
    return this._http.post<ISportSubFieldName>(this._url + '/subField-name', { subField }).pipe(map(c => c.subFieldName));
  }
}
