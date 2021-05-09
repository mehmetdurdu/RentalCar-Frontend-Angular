import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/models/responseModel';
import { UserDetail } from 'src/app/models/userDetail';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  fullName: string;
  userId: number;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.controlAuthentication()) {
      this.fullName = this.getFullName();
      this.getUser();
    }
  }

  controlAuthentication():Observable<ResponseModel> {
    return this.authService.isAuthenticated();
  }

  getFullName(): string {
    return localStorage.getItem('fullName');
  }

  getUser(): number {
    this.userService.getUsers().subscribe((response) => {
      response.data.forEach((user) => {
        if (user.email == this.getFullName()) {
          this.userId = user.userId;
        }
      });
    });
    return this.userId;
  }

  logout() {
    this.authService.logout();
  }

}
