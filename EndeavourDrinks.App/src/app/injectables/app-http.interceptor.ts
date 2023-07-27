import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.onPreRequest();
    const newRequest: HttpRequest<unknown> = request.clone({
      setHeaders: { 'Cache-Control': 'no-cache' },
    });
    return next.handle(newRequest).pipe(
      finalize(() => {
        this.loadingService.onPostRequest();
      })
    ) as Observable<HttpEvent<unknown>>;
  }
}
