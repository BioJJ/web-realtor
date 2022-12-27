import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { PropertiesService } from 'src/app/properties/services/properties.service';
import { PurchaseService } from 'src/app/purchase/services/purchase.service';
import { Properties } from 'src/app/shared/models/properties.model';
import { Purchase } from 'src/app/shared/models/purchase.model';
import { UserToken } from 'src/app/shared/models/user-token.model';
import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  propertyGroup = this._formBuilder.group({
    propertyForm: ['', Validators.required],
  });
  valuesGroup = this._formBuilder.group({
    saleValue: ['', Validators.required],
    profitPercentage: ['', Validators.required],
  });
  isLinear = true;

  properties: Properties[] = [];
  displayedColumns = ['id', 'description', 'value', 'owner', 'status'];

  user: Users = {
    id: this.usuarioLogado.sub,
    name: this.usuarioLogado.name,
  };

  property: Properties = {
    id: null,
    value: '',
    description: '',
    status: 'EM ESTOQUE',
    user: null,
  };

  purchase: Purchase = {
    saleValue: '',
    profitPercentage: '',
    user: this.user,
    property: this.property,
  };

  constructor(
    private purchaseService: PurchaseService,
    private loginService: LoginService,
    private propertyService: PropertiesService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.usuarioLogado.profile === 'ADM') {
      this.propertyService.readInStock().subscribe((property) => {
        this.properties = property;
      });
    } else {
      this.propertyService
        .readNotUser(this.usuarioLogado.sub)
        .subscribe((property) => {
          this.properties = property;
        });
    }
  }

  get usuarioLogado(): UserToken {
    return this.loginService.usuarioLogado;
  }

  selectProperty(property: Properties | null) {
    this.property = {
      id: null,
      value: '',
      description: '',
      status: 'EM ESTOQUE',
    };
    this.propertyGroup.controls['propertyForm'].setValue('');

    if (property) {
      this.property.id = property.id;
      this.property.value = property.value;
      this.property.description = property.description;
      this.propertyGroup.controls['propertyForm'].setValue(
        property.description
      );
    }
  }

  createValue(): void {
    this.purchase.profitPercentage = this.valuesGroup.value.profitPercentage;
    this.purchase.saleValue = this.valuesGroup.value.saleValue;
    this.purchase.user = this.user;
    this.purchase.property = this.property;
  }

  createPurchase(): void {
    this.purchaseService.create(this.purchase).subscribe(() => {
      this.purchaseService.showMessage('Venda criada!', false);
      this.router.navigate(['/purchase']);
    });
  }

  cancel(): void {
    this.router.navigate(['/purchase']);
  }
}
