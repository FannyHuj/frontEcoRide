import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { TripService } from '../../trip/services/trip.service';
import { Statistics } from '../../models/statistics';

Chart.register(...registerables);

@Component({
  selector: 'app-admim-trip-chart',
  imports: [CommonModule],
  templateUrl: './admim-trip-chart.component.html',
  styleUrls: ['./admim-trip-chart.component.css']
})
export class AdmimTripChartComponent implements AfterViewInit {

  statistics: Statistics = {} as Statistics;

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(private tripService: TripService) {}

  ngAfterViewInit() {
    this.tripService.getChartInfo().subscribe((data) => {
      this.statistics = data;
      this.initChart(this.statistics.day, this.statistics.tripsPerDay);
    });
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
            backgroundColor: 'rgba(113, 153, 125, 0.5)',
            borderColor: 'rgba(113, 153, 125, 1)',
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
