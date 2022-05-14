import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BrowserHttpInterceptor implements HttpInterceptor {

    constructor(
        private transferState: TransferState,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const key = makeStateKey(req.url);
        const storedResponse = this.transferState.get(key, null);
        if (storedResponse) {
            const response = new HttpResponse({ body: storedResponse, status: 200 });
            return of(response);
        }
        return next.handle(req);
    }
}