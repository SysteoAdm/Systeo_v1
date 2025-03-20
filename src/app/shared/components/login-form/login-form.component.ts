import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  user: User = {
    email: '',
    password: ''
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

      this.authService.login(this.user.email, this.user.password)
      .pipe(
        takeUntil(this.destroy$) //para se desinscrever e evitar vazamento de memoria
      )
      .subscribe({
        next : (response) => {
         /*  this.dialogService.toggleVisibility();
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Documento Atualizado', life: 7000 });
          this.user = {}; */
          this.authService.setToken(response.token);
          console.log('login realizado')
          this.router.navigate(['/home'])
        },
        error: (err) =>console.log('deu ruim' ),
      })
}

}
