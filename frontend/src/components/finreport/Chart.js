import { Component } from 'react';
import ApexCharts from 'react-apexcharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: '여성',
          data: props.femaleYear
        },
        {
          name: '남성',
          data: props.maleYear
        }
      ],

      options: {
        chart: {
          zoom: {}
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        colors: ['var(--primaryMain)', 'var(--secondaryMain)']

        // grid: {
        //   row: {
        //     colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //     opacity: 0.5
        //   }
        // }
      }
    };
  }
  render() {
    return (
      <ApexCharts
        options={this.state.options}
        series={this.state.series}
        typs="line"
        height={300}
      />
    );
  }
}
