import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MarksList } from './app.interface';

@Injectable()
export class MarksServiceService {

  constructor(private http: Http) {}

  getMarks(): Observable<MarksList[]> {
    return this.http.get('assets/data.json')
        .map((r: Response) => r.json());
  }

}
