import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerHttpInterceptor } from './services/http-interceptor/server/server-http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,

  ],
  providers: [
      // Add universal-only providers here
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerHttpInterceptor,
          multi: true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
