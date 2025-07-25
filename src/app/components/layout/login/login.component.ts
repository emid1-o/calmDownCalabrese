import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario!:string;
  senha!:string;

  router = inject(Router);

  logar(){

    if (this.usuario == "admin" && this.senha == "admin"){
      //redirect to musicas
      this.router.navigate(["admin/musicas"]);
    } else {
      alert("usuario ou senha incorretos")
    }
  }

}
