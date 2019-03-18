import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RepolistComponent } from "./pages";

const routes: Routes = [
    {
        path: 'github',
        component: RepolistComponent,
        children: [
            {path: 'list', component: RepolistComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GithubRoutingModule{}