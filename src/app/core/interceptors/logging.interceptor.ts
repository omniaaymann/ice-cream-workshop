import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    return next.handle(req).pipe(
      tap({
        next: (event) =>
          (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        error: () => (ok = 'failed'),
      }),
      finalize(() => {
        const elapsed = Date.now() - started;
        const message = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
        console.log(message);
      })
    );
  }
}
