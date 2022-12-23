import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import config from 'src/app/config/config';
import { Login } from 'src/app/shared/models/login.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

const LS_CHAVE: string = 'ususariologado';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = `${config.url}/login`;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  public get usuarioLogado(): UserToken {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(user: UserToken) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<UserToken | null> {
    return this.http.post<Login>(this.baseUrl, login).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );

    // return of(null);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
