import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  @ViewChild('CharPie', { static: true }) elemento: ElementRef;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    new Chart(this.elemento.nativeElement, {
      type: 'pie',
      data: {
        labels: ['User', 'Property', 'Vendas'],
        datasets: [
          {
            label: 'User',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
      },
    });
  }
}
