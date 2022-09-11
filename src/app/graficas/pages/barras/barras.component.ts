import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html'
})
export class BarrasComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#EB5050' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Liga BBVA', backgroundColor: '#2E739E' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Premier League', backgroundColor: '#EBE967' },
    ]
  };

  public randomize(): void {
    this.barChartData.datasets.forEach(dataset => {
      const data: number[] = [];
      dataset.data.forEach(() => {
        data.push(Math.round(Math.random() * 100));
      });

      dataset.data = data;
    });

    this.chart?.update();
  }

}
