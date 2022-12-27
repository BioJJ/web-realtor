import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase/services/purchase.service';
import { Purchase } from 'src/app/shared/models/purchase.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  purchase: Purchase;

  constructor(
    private purchaseService: PurchaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.purchaseService.readById(id).subscribe((purchase) => {
      this.purchase = purchase;
    });
  }

  cancelarPurchase(): void {
    this.purchaseService.change(this.purchase, 'CANCELADA').subscribe(() => {
      this.purchaseService.showMessage('Venda CANCELADA com sucesso!');
      this.router.navigate(['/purchase']);
    });
  }

  aprovarPurchase(): void {
    this.purchaseService.change(this.purchase, 'FECHADA').subscribe(() => {
      this.purchaseService.showMessage('Venda FECHADA com sucesso!');
      this.router.navigate(['/purchase']);
    });
  }

  cancel(): void {
    this.router.navigate(['/purchase']);
  }
}
