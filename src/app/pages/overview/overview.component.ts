import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
    selector: 'overview-cmp',
    moduleId: module.id,
    templateUrl: 'overview.component.html'
})

export class OverviewComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartAdmin;
  public chartAlloc;

    ngOnInit(){
      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartAdmin");
      this.ctx = this.canvas.getContext("2d");

      this.chartAdmin = new Chart(this.ctx, {
        type: 'bar',

        data: {
          labels: ["Dec 14 - Dec 20", "Dec 21 - Dec 27", "Dec 28 - Jan 3", "Jan 4 - Jan 10", "Jan 11 - Jan 17", "Jan 18 - Today"],
          datasets: [{
              borderColor: "#386B68",
              backgroundColor: "#B1D2B1",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 2,
              data: [112978, 131247, 270047, 421234, 370547, 253371]
            }
          
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: true,
            callback: function(value, index, values) {
              return value.toLocaleString();
            }
            
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: true,
                maxTicksLimit: 5,
                callback: function(value, index, values) {
                  return value.toLocaleString();
                }
              },
              gridLines: {
                drawBorder: true,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1,
              gridLines: {
                drawBorder: true,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: true,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });

      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartAlloc");
      this.ctx = this.canvas.getContext("2d");

      this.chartAlloc = new Chart(this.ctx, {
        type: 'bar',

        data: {
          labels: ["Dec 14 - Dec 20", "Dec 21 - Dec 27", "Dec 28 - Jan 3", "Jan 4 - Jan 10", "Jan 11 - Jan 17", "Jan 18 - Today"],
          datasets: [{
              borderColor: "#386B68",
              backgroundColor: "#BEB7DF",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 2,
              data: [224250, 609200, 384375, 550475, 477925, 966800]
            }
          
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: true,
            callback: function(value, index, values) {
              return value.toLocaleString();
            }
            
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: true,
                maxTicksLimit: 5,
                callback: function(value, index, values) {
                  return value.toLocaleString();
                }
              },
              gridLines: {
                drawBorder: true,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1,
              gridLines: {
                drawBorder: true,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: true,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });

    }
}
