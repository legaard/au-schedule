import { Injectable, isDevMode } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
    private readonly port = 3033;
    private readonly ip = '198.211.106.128';
    private readonly apiUrl: string;

    constructor() {
        this.apiUrl = `http://${this.ip}:${this.port}`;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            url: `${this.apiUrl}/${request.url}`
        });

        return next.handle(request);
    }
}
