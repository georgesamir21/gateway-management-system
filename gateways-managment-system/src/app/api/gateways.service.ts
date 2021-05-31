import { Gateway } from './models/gateway';
import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { BASE_URL } from './variables';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GatewaysService {
  protected baseUrl: string = '';
  public defaultHeaders: HttpHeaders = new HttpHeaders();

  constructor(
    @Inject(BASE_URL) baseUrl: string,
    private httpClient: HttpClient
  ) {
    if (baseUrl) {
      this.baseUrl = baseUrl;
    }
  }

  getAllGateways(): Observable<{data: Gateway[]}> {
    let headers = this.defaultHeaders;
    return this.httpClient.get<{data: Gateway[]}>(`${this.baseUrl}/gateways`, {
      headers,
    });
  }

  getGatewayById(id: string): Observable<Gateway> {
    let headers = this.defaultHeaders;
    return this.httpClient.get<Gateway>(`${this.baseUrl}/gateways/${id}`, {
      headers,
    });
  }

  updateGatewayById(id: string, body: Partial<Gateway>): Observable<any> {
    let headers = this.defaultHeaders;
    return this.httpClient.put(`${this.baseUrl}/gateways/${id}`, body, {
      headers,
    });
  }

  deleteGatewayById(id: string): Observable<any> {
    let headers = this.defaultHeaders;
    return this.httpClient.delete(`${this.baseUrl}/gateways/${id}`, {
      headers,
    });
  }

  postGateway(body: Gateway): Observable<Gateway> {
    let headers = this.defaultHeaders;
    return this.httpClient.post<Gateway>(`${this.baseUrl}/gateways`, body, {
      headers
    });
  }
}
