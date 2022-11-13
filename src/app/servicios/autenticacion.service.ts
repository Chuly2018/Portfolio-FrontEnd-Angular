import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../../app/components/models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../../app/components/models/login-usuiario';
import { JwtDTO } from '../../app/components/models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }
}
