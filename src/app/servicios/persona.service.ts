import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { persona } from '../components/models/persona.model';

@Injectable({
    providedIn: 'root'
})

export class PersonaService {

    productoURL = 'http://localhost:8080/personas/'

    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<persona[]> {
        return this.httpClient.get<persona[]>(this.productoURL + 'lista');
    }

    public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.productoURL + 'delete/${id}');
    }

}