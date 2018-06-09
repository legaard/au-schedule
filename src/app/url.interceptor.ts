import { Injectable, isDevMode } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    private readonly port = 3033;
    private readonly ip = '198.211.106.128';
    private readonly apiUrl: string;
    private readonly apiKey: string;
    private readonly apiClient: string;

    constructor() {
        this.apiUrl = `http://${this.ip}:${this.port}`;
        this.apiKey = environment.apiKey;
        this.apiClient = environment.apiClient;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: `${this.apiUrl}/${request.url}`,
            headers: request.headers
              .set('x-api-client', this.apiClient)
              .set('x-api-key', this.apiKey)
        });

        return next.handle(request);
    }
}
