import { Component } from '@angular/core';
import { UserService } from 'src/app/registers/services/user.service';
import { RegisterUser } from 'src/app/models/register-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user: RegisterUser = {
    nombre: '',
    correo: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.registerUser(this.user)
      .subscribe({
        next: (response) => {
          alert('Usuario registrado correctamente');
          this.router.navigate(['/admin/categorias']); // Redirige a lista de categorías
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
        }
      });
  }
}
