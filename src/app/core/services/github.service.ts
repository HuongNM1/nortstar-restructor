import { HttpClient } from "@Angular/common/http";
import { Observable } from "rxjs";
import { repos } from "../models";
import { Injectable } from "@angular/core";

@Injectable()
export class GithubService{
    baseUrl: string="https://api.github.com/";

    constructor(private http:HttpClient){ }

    getRepos(userName: string): Observable<repos[]>{
        return this.http.get<repos[]>(this.baseUrl + 'users/' + userName + '/repos');
    }
}