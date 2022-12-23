import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Imóvel',
      icon: 'real_estate_agent',
      routeUrl: '/properties',
    };
  }

  ngOnInit(): void {}

  navigateToPropertyCreate(): void {
    this.router.navigate(['/properties/create']);
  }

}
