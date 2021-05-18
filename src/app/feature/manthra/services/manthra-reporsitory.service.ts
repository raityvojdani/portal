import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { checkZoastrianCardInfo } from '../models/check-zoastrian-card-info';
import { getAgeRange } from '../models/get-age-range';
import { getUserStepManthra } from '../models/get-user-step-manthra';
import { isUnder13Info } from '../models/is-under18-info';
import { SubjetInfo } from '../models/subject-info';

@Injectable({
  providedIn: 'root'
})
export class ManthraReporsitoryService {
  private readonly _url = environment.url + '/api/v1/account/manthra';
  constructor (private readonly _http: HttpClient) { }
  getUserStatus() {
    return this._http.get<checkZoastrianCardInfo>(this._url + '/state').pipe(map(c => c.status));
  }
  getProjectSubjects() {
    return this._http.get<SubjetInfo>(`${this._url}/gat-ha/ProjectBasePartSubject`).pipe(tap(c => console.log(c)));
  }
  getAgeRange() {
    return this._http.post<getAgeRange>(`${this._url}/gat-ha/getAgeType`, {});
  }
  canPersionRegister(nationalCode: string) {
    return this._http.post(`${this._url}/gat-ha/getInfoForNationalCode`, {
      nationalCode,
    });
  }
  submitForms(data) {
    return this._http.post(`${this._url}/gat-ha/register`, data);
  }
  checkStepoFRegster() {
    return this._http.get<getUserStepManthra>(this._url + '/gat-ha/step');
  }
  gataHaHaveReqiuredAge() {
    return this._http.get<isUnder13Info>(this._url + '/gat-ha/isUnder13');
  }
}