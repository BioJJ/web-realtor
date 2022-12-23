import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Inserir Venda',
      icon: 'storefront',
      routeUrl: '/purchase',
    };
  }

  ngOnInit(): void {}

  navigateToPurchaseCreate(): void {
    this.router.navigate(['/purchase/create']);
  }

}
