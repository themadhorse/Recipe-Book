import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth/auth.component";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([{ path: 'auth', component: AuthComponent}])
    ],
    exports: [RouterModule]
})
export class AuthModule { }