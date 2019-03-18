import { NgModule } from "@angular/core";
import { AdminRoutingModule } from './admin.routing.module';
import { UserComponent, RightComponent, DashboardComponent, AdminComponent } from "./pages";


@NgModule({
    declarations: [UserComponent, RightComponent, DashboardComponent, AdminComponent],
    imports: [AdminRoutingModule]
})
export class AdminModule { constructor() { alert('admin') } }