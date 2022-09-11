import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html'
})
export class BarrasDobleComponent {
  public dataLabels = [ '2016', '2017', '2018', '2019', '2020' ];

  public proveedoresData: ChartData<'bar'> = {
    labels: this.dataLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A', backgroundColor: '#EB5050' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B', backgroundColor: '#2E739E' },
    ]
  };

  public productData: ChartData<'bar'> = {
    labels: this.dataLabels,
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: '#EB5050' },
    ]
  };

  constructor() { }

}
