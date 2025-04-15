import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/userLogin';
import { AuthService } from 'src/app/services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  user: UserLogin = {
    email: '',
    senha: ''
};
valCheck: string[] = ['remember'];
private readonly destroy$: Subject<void> = new Subject();
password!: string;


constructor(
    private authService : AuthService,
    private router : Router) { }

ngOnInit() : void{
  console.log("Teste passou aqui")
  // if (this.authService.isAuthenticated()){
  //   this.router.navigate(['/pages/documento'])
  // }
}

onLogin() : void {

      this.authService.login(this.user.email, this.user.senha)
      .pipe(
        takeUntil(this.destroy$) //para se desinscrever e evitar vazamento de memoria
      )
      .subscribe({
        next : (response) => {
   
          this.authService.setToken(response.token);
          this.authService.setUser(response.user.email);
          console.log('login realizado')
          this.router.navigate(['/home'])
        },
        error: (err) =>console.log('Erro ao realizar o login.' ),
      })
}

}
