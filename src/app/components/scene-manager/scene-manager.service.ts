import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SceneManagerService {

  constructor(private http: HttpClient) { }

  getSceneData(): Observable<any> {
    return this.http.get('app/assets/json/scene-manager.json');
  }
}



