import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as config from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Purchase } from 'src/app/shared/models/purchase.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  baseUrl: string = `${config.default.url}/purchase`;
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(purchase: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(this.baseUrl, purchase).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readByStatus(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.baseUrl + 'in-process').pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Purchase> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Purchase>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(purchase: Purchase): Observable<Purchase> {
    const url = `${this.baseUrl}/${purchase.id}`;
    return this.http.patch<Purchase>(url, purchase).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Purchase> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Purchase>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
