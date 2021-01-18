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
  public chartEmail;
  public chartHours;

    ngOnInit(){
      this.chartColor = "#FFFFFF";

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");

      this.chartHours = new Chart(this.ctx, {
        type: 'bar',

        data: {
          labels: ["Dec 14 - Dec 20", "Dec 21 - Dec 27", "Dec 28 - Jan 3", "Jan 4 - Jan 10", "Jan 11 - Jan 17"],
          datasets: [{
              borderColor: "#386B68",
              backgroundColor: "#B1D2B1",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 2,
              data: [112978, 131247, 270047, 421234, 265249]
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
