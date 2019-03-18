import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { GithubService, repos } from "../../../core";

@Component({
    selector: 'repolist',
    templateUrl: 'reporlist.component.html'
})
export class RepolistComponent {
    
    userName: string = 'angular';
    repos: repos[];

    loading: boolean = false;
    errorMessage;

    constructor(private githubService: GithubService) {alert('RepolistComponent'); }

    public getRepos() {
        this.loading = true;
        this.errorMessage = '';
        this.githubService
            .getRepos(this.userName)
            .subscribe(response => { this.repos = response; },
                error => { this.errorMessage = error; this.loading = false; },
                () => { this.loading = true; });
    }
}