import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IDataCollection } from '../../shared/jam-shared/models/IDataCollection';
import { IPlayer } from '../../shared/jam-shared/models/IPlayer';
import { map } from 'rxjs/operators';
import { SportField } from '../../../models/sport-field';
import { SportSubField } from '../../../models/sub-sport-field';
import { IDoubleTeam } from '../models/idouble-team';
import { IDoubleTeamDetial } from '../models/idouble-team-detial';
import { ITeamsList } from '../models/iteams-list';
import { ITeamDetail } from '../models/iteam-detail';
@Injectable({
  providedIn: 'root'
})
export class SetadRepositoryService {
  private readonly _url = environment.url + '/api/v1/account/jam/setad';
  constructor (private readonly _httpClient: HttpClient) { }
  get allPlayers() {
    return this._httpClient.get<IDataCollection<IPlayer>>(this._url + '/all').pipe(map(c => c.data));
  }
  singlePlayers(field: SportField, subField: SportSubField) {
    return this._httpClient.post<IDataCollection<IPlayer>>(`${this._url}/single-filtered`, { field, subField })
      .pipe(map(t => t.data));
  }
  singlePlayer(id: number) {
    return this._httpClient.get<IPlayer>(this._url + '/single/' + id);
  }
  doubleTeams(field: SportField, subField: SportSubField) {
    return this._httpClient.post<IDataCollection<IDoubleTeam>>(this._url + '/double-filtered', { field, subField })
      .pipe(map(t => t.data));
  }
  teams(field: SportField, subField: SportSubField) {
    return this._httpClient.post<IDataCollection<ITeamsList>>(this._url + '/team-filtered', { field, subField }).pipe(map(t => t.data));
  }
  team(id: number) {
    return this._httpClient.get<ITeamDetail>(`${this._url}/team/${id}`);
  }
  doubleTeam(id: number) {
    return this._httpClient.get<IDoubleTeamDetial>(`${this._url}/double/${id}`);
  }
}
