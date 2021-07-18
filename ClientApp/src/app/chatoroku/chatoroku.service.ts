import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from './IArticles';

@Injectable({
    providedIn: 'root',
})

export class ChatorokuService {
    constructor(
        private readonly http: HttpClient,
        @Inject('BASE_URL') private readonly baseUrl: string,
    ) { }

    getChatorokuArticles(): Observable<IArticle[]> {
        return this.http.get<IArticle[]>(this.baseUrl + 'chatoroku');
    }
}
