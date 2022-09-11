import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html'
})
export class DonaHTTPComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: any[] = [];

  public doughnutDatasetData: any[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.doughnutDatasetData },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private _graficasService: GraficasService,
  ) { }

  ngOnInit(): void {
    this._graficasService.getUsuariosNetwork()
      .subscribe((data: any) => {
        this.doughnutChartData = {
          labels: Object.keys(data),
          datasets:[
            { data:Object.values(data) }
          ]
        }
      })

    console.log(this.doughnutChartLabels);
    console.log(this.doughnutDatasetData);
  }

}
