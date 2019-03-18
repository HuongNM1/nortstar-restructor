import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home.routing.module";
import { AboutusComponent, ContactusComponent, HomeComponent } from "./pages";

@NgModule({
    imports: [
        HomeRoutingModule
    ],
    declarations: [AboutusComponent, ContactusComponent, HomeComponent]
})
export class HomeModule { }