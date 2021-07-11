import { HttpClient, } from '@angular/common/http';
import { Inject, Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TwitchVideosService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string,
    ) {
    }

    getTwitchVideos(): Observable<string[]> {
        return this.http.get<string[]>(this.baseUrl + 'twitch');
    }
}
