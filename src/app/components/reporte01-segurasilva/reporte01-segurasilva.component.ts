import { Component } from '@angular/core';
import { ReportService } from '../../services/report.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-reporte01-segurasilva',
  templateUrl: './reporte01-segurasilva.component.html',
  styleUrl: './reporte01-segurasilva.component.scss',
})
export class Reporte01SegurasilvaComponent {
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.showCertificationByUser();
  }

  showCertificationByUser() {
    this.reportService.getCertificationByUser().subscribe({
      next: (response) => {
        const labels = response.map((response) => response.username);
        const data = response.map((response) => response.numberCertifications);
        new Chart('certificationsByUser', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: data,
                backgroundColor: [
                  '#EEB8B8',
                  '#FAE2A3',
                  '#F0CAAA',
                  '#CDE9B2',
                  '#DBCAED',
                  '#C2E4F0',
                  '#D9D9D9',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      },
    });
  }
}
