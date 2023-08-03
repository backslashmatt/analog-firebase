import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class HelloService {
  httpClient = inject(HttpClient);

  public getHello() {}
}
