import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AppState } from "src/app/store/app.reducer";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router, private store: Store<AppState>){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        return this.store.select('auth').pipe(take(1), 
            map(authState => authState.user),
            map(user => {
            const isAuth = !!user;
            if(isAuth)
                return true;
            else
                return this.router.createUrlTree(['/auth']);
        }));
    }
}