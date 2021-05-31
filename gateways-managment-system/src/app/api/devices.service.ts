import { Device } from './models/device';
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
export class DevicesService {
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

  getAlldevices(): Observable<{data: Device[]}> {
    let headers = this.defaultHeaders;
    return this.httpClient.get<{data: Device[]}>(`${this.baseUrl}/devices`, {
      headers,
    });
  }

  getDeviceById(id: string): Observable<Device> {
    let headers = this.defaultHeaders;
    return this.httpClient.get<Device>(`${this.baseUrl}/devices/${id}`, {
      headers,
    });
  }

  updateDeviceById(id: string, body: Partial<Device>): Observable<any> {
    let headers = this.defaultHeaders;
    return this.httpClient.put(`${this.baseUrl}/devices/${id}`, body, {
      headers,
    });
  }

  deleteDeviceById(id: string): Observable<any> {
    let headers = this.defaultHeaders;
    return this.httpClient.delete(`${this.baseUrl}/devices/${id}`, {
      headers,
    });
  }

  postDevice(body: Device): Observable<Device> {
    let headers = this.defaultHeaders;
    return this.httpClient.post<Device>(`${this.baseUrl}/devices`, body, {
      headers
    });
  }
}
