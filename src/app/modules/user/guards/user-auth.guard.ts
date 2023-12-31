import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { fetchUserData } from '../store/user.action';
import { userSelectorData } from '../store/user.selector';
import { User } from '../store/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  access: boolean = false
  
  constructor(private router: Router, private store: Store<{ userData: User }>) {
    this.access = false
    const token = localStorage.getItem('userToken')
    if (token) {
      const id = <string>localStorage.getItem('userId')
      this.store.dispatch(fetchUserData({ id }))
      this.store.pipe(select(userSelectorData)).subscribe((res) => {
        if (res?.access == false) {
          localStorage.removeItem('userId')
          localStorage.removeItem('userToken')
        }else{
          this.access = true
        }
      })
    }
  }

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('userToken');
    if (isAuthenticated && this.access) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}

