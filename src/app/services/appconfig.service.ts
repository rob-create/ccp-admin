import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { DataConfig } from '../models/dataConfig';
import { Contants } from '../utils/Contants';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  constructor(
    private _http: HttpClient
  ) { }

  getDeploymentConfig(): Observable<any>{
      return this._http.get(Contants.API_ENDPOINT)
  }

}
