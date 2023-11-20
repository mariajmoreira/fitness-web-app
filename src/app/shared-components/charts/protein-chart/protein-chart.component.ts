import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-protein-chart',
  templateUrl: './protein-chart.component.html',
  styleUrls: ['./protein-chart.component.css']
})
export class ProteinChartComponent {
  @Input() macro_left :number;
  @Input() macro_used :number;
  @Input() macroName;

public chart:any;

data = {
  labels: [
'default'
  ],
  datasets: [{
    label: 'Protein',
    data: [0,0],
    backgroundColor: [
      '#8d8d8d'
    ],
    hoverOffset: 4
  }]
};

ngOnInit(): void {
/*   let chartStatus = Chart.getChart("ProteinChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  } */

}

ngOnChanges(){
 // alert("protein chart change")
  let chartStatus = Chart.getChart("ProteinChart"); // <canvas> id
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  //-- End of chart destroy
  //this.chart.destroy();
  this.createChart();
}

createChart(){
  this.data.datasets[0].data = [this.macro_left, this.macro_used]
  this.data.labels=[]

   this.data.datasets[0].backgroundColor.push('rgb(255, 99, 132)')

 // alert(JSON.stringify(this.data))


 const doughnutLabel = {
  id: '',
  beforeDatasetsDraw(chart,args,pluginOptions){
    const {ctx,data}=chart;
    ctx.save();
    const xCoor=chart.getDatasetMeta(0).data[0].x;
    const yCoor=chart.getDatasetMeta(0).data[0].y;

     ctx.font='10px sans-serif';
    ctx.fillStyle = '#8d8d8d';
    ctx.textAlign='center';
    ctx.textBaseLine='middle';
    ctx.fillText(`Protein`,xCoor,yCoor-5);
/*
    let used =0;
    if(this.macro_used!=undefined){
      used = this.macro_used
    }

    let left =0;
    if(this.macro_left!=undefined){
      left = this.macro_left
    }


    ctx.fillText(`${used} / ${left}`,xCoor,yCoor+5); */
  }
}

  this.chart = new Chart("ProteinChart", {
    type: 'doughnut', //this denotes tha type of chart

    data: this.data,
    options: {
      cutout:'80%',
      responsive:true,
      maintainAspectRatio:true,
      elements: {
        arc: {
          borderWidth:0,
        }
      }
    }
    ,   plugins:[doughnutLabel]

  });
  this.chart.update();

}
}
