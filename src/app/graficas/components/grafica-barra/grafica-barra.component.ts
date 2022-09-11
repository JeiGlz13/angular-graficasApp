import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html'
})
export class GraficaBarraComponent implements OnInit{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() dataLabels: string[] = [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ];
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal) {

      //Para invertir las barras y colocarlas horizontalmente necesitamos cambiar el "indexAxis"
      this.barChartOptions!.indexAxis = 'y';

      //Para que se nos muestren todos los datos horizontalmente también debemos retirar el
      //"min" que tenemos en el barChartOptions.
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Serie A', backgroundColor: '#EB5050' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Liga BBVA', backgroundColor: '#2E739E' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Premier League', backgroundColor: '#EBE967' },
    ]
  };
}
