import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { Properties } from 'src/app/shared/models/properties.model';
import { UserToken } from 'src/app/shared/models/user-token.model';

@Component({
  selector: 'app-list-property',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  property: Properties[] = [];
  displayedColumns = ['id', 'description', 'value', 'owner', 'status', 'action'];

  constructor(
    private propertyService: PropertiesService,
    private loginService: LoginService
  ) {}

  get usuarioLogado(): UserToken | null {
    return this.loginService.usuarioLogado;
  }

  ngOnInit(): void {
    if (this.usuarioLogado.profile === 'ADM') {
      this.propertyService.read().subscribe((property) => {
        this.property = property;
      });
    } else {
      this.propertyService.readByUser(this.usuarioLogado.sub).subscribe((property) => {
        this.property = property;
      });
    }
  }
}
