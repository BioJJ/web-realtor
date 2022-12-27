import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { Properties } from 'src/app/shared/models/properties.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  user: Users = {
    id: this.usuarioLogado.sub,
  };

  property: Properties = {
    description: '',
    value: '',
    user: this.user,
  };

  constructor(
    private propertyService: PropertiesService,
    private loginService: LoginService,
    private router: Router
  ) {}

  get usuarioLogado(): UserToken {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    this.property.user.id = this.usuarioLogado.sub;
  }

  createProperty(): void {
    this.propertyService.create(this.property).subscribe(() => {
      this.propertyService.showMessage('Imovel criado!');
      this.router.navigate(['/properties']);
    });
  }

  cancel(): void {
    this.router.navigate(['/properties']);
  }
}
