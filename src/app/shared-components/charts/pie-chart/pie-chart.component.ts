import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

/* import Chart from 'chart.js'; */

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input() protein :number;
  @Input() fats :number;
  @Input() carbs :number;

public chart:any;

data = {
  labels: [
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [1],
    backgroundColor: [
      '#8d8d8d'
    ],
    hoverOffset: 4
  }]
};

ngOnInit(): void {
  let chartStatus = Chart.getChart("MyChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  this.chart = new Chart("MyChart", {
    type: 'pie', //this denotes tha type of chart

    data: this.data,
    options: {
      aspectRatio:2.5,
      maintainAspectRatio:false
    }

  });
}

ngOnChanges(){
  let chartStatus = Chart.getChart("MyChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  //-- End of chart destroy
  //this.chart.destroy();
  this.createChart();
}

createChart(){
if(this.protein!=0){
  this.data.datasets[0].data = [this.protein,this.fats,this.carbs]
 // alert(JSON.stringify(this.data))

  this.data.datasets[0].backgroundColor=[
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
  ]

}


  this.chart = new Chart("MyChart", {
    type: 'pie', //this denotes tha type of chart

    data: this.data,
    options: {
      aspectRatio:2.5,
      maintainAspectRatio:false,
      elements: {
        arc: {
          borderWidth:0,
        }
      }
    }

  });
  this.chart.update();

}
}
