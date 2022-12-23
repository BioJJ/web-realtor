import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/purchase/services/purchase.service';
import { Purchase } from 'src/app/shared/models/purchase.model';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  purchase: Purchase[] = [];
  displayedColumns = ['id', 'saleValue', 'profitPercentage', 'status', 'action'];

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.purchaseService.read().subscribe((purchase) => {
      this.purchase = purchase;
    });
  }
}
