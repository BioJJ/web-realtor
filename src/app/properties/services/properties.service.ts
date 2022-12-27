import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Properties } from 'src/app/shared/models/properties.model';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  baseUrl: string = `${config.default.url}/properties`;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(property: Properties): Observable<Properties> {
    return this.http.post<Properties>(this.baseUrl, property).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Properties[]> {
    return this.http.get<Properties[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByUser(id: number): Observable<Properties[]> {
    const url = `${this.baseUrl}/${id}/user`;
    return this.http.get<Properties[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readNotUser(id: number): Observable<Properties[]> {
    const url = `${this.baseUrl}/${id}/in-stock`;
    return this.http.get<Properties[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readInStock(): Observable<Properties[]> {
    return this.http.get<Properties[]>(this.baseUrl+'/in-stock').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Properties> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Properties>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(property: Properties): Observable<Properties> {
    const url = `${this.baseUrl}/${property.id}`;
    return this.http.patch<Properties>(url, property).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Properties> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Properties>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
