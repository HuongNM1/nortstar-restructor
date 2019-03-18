import { NgModule } from "@angular/core";
import { GithubRoutingModule } from "./github.routing.module";
import { RepolistComponent } from "./pages";

@NgModule({
    imports: [
        GithubRoutingModule
    ],
    declarations: [RepolistComponent]
})
export class GithubModule { constructor(){alert('github')} }