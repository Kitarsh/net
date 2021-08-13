import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { IArticle, IParagraph } from './IArticles';

@Injectable({
    providedIn: 'root',
})

export class ChatorokuService {

    private baseUrlChatorokuController = `${this.baseUrl}chatoroku`;

    constructor(
        private readonly http: HttpClient,
        @Inject('BASE_URL') private readonly baseUrl: string
    ) { }

    getChatorokuArticles(): Observable<IArticle[]> {
        return this.http.get<IArticle[]>(this.baseUrlChatorokuController);
    }

    getChatorokuArticle(idArticle: number): Observable<IArticle[]> {
        return this.http.get<IArticle[]>(`${this.baseUrlChatorokuController}/GetArticle/${idArticle}`);
    }

    createChartorokuArticle(article: IArticle): Observable<IArticle> {
        return this.http.post<IArticle>(`${this.baseUrlChatorokuController}/Article/Create`, article);
    }

    createChatorokuParagraph(paragraph: IParagraph): void {
        const observable = this.http.post<IParagraph>(`${this.baseUrlChatorokuController}/Paragraph/Create`, paragraph);
        observable.subscribe();
    }

    editChatorokuParagraph(paragraph: IParagraph): void {
        const observable = this.http.post<IParagraph>(`${this.baseUrlChatorokuController}/Paragraph/Edit`, paragraph);
        observable.subscribe();
    }

    deleteChatorokuParagraph(paragraph: IParagraph): void {
        const observable = this.http.post<IParagraph>(`${this.baseUrlChatorokuController}/Paragraph/Delete`, paragraph);
        observable.subscribe();
    }

    editChatorokuArticle(article: IArticle): void {
        const observable = this.http.post<IParagraph>(`${this.baseUrlChatorokuController}/Article/Edit`, article);
        observable.subscribe();
    }
}
