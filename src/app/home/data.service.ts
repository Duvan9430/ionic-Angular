import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn:"root"
})
export class DataService {
    constructor(private http: HttpClient){
    }

    getDataEpisodios(){
        return this.http.get<any>("https://api.jikan.moe/v3/anime/1/news");
    }
}