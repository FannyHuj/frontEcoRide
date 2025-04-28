import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { StatisticService } from '../../services/statistic.service';

Chart.register(...registerables);

@Component({
  selector: 'app-admim-trip-chart',
  imports: [CommonModule],
  templateUrl: './admim-trip-chart.component.html',
  styleUrls: ['./admim-trip-chart.component.css']
})

export class AdmimTripChartComponent implements AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(private statisticService: StatisticService) {}

  ngAfterViewInit() {
    this.initChart(['A','B','C'],[1,2,3]);
  }
 
    initChart(labels: string[], data: number[]) {
      this.chart = new Chart(this.chartCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Nombre de covoiturages',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }


