import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsletterResponse } from '../interfaces/newsletter.interface';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

   private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }



  sendData(name: string, email: string) {
    const data = {name, email};
    return this.http.post<NewsletterResponse>(this.endpointUrl,data);
  }
}
