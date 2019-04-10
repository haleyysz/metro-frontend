import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Map } from '../_model/map.model';

@Injectable({ providedIn: 'root' })
export class MapService {
  private rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  getMap(id: string) {
    return this.http.get<Map>(this.rootUrl + `/metro/api/v1/map/` + id);
  }

  getMaps() {
    return this.http.get<any[]>(this.rootUrl + `/metro/api/v1/maps/`);
  }

  createMap(map: Map) {
    return this.http.post(this.rootUrl + `/metro/api/v1/map/create`, map);
  }

  saveMap(map: Map) {
    return this.http.put(this.rootUrl + `/metro/api/v1/map/update`, map);
  }

  deleteMap(id: string) {
    return this.http.delete(this.rootUrl + `/metro/api/v1/map/delete/` + id);
  }
}