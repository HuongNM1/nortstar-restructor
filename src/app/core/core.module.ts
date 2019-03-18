import { NgModule, Optional, SkipSelf } from "@angular/core";
import { GithubService } from "./services/github.service";

@NgModule({
    providers:[GithubService]
})
export class CoreModule{

    constructor(@Optional() @SkipSelf() core: CoreModule){
        if(core){
            throw new Error("You should import core module only in the root module");
        }
    }

}