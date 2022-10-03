import { Component } from 'react';
import ApexCharts from 'react-apexcharts';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.series = [];
    function isNotZero(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i] != 0) {
          return true;
        }
      }
      return false;
    }

    if (props.femaleYear.length > 0 && isNotZero(props.femaleYear)) {
      this.series.push({
        name: '여성',
        data: props.femaleYear
      });
    }
    if (props.maleYear.length > 0 && isNotZero(props.maleYear)) {
      this.series.push({
        name: '남성',
        data: props.maleYear
      });
    }
    this.state = {
      options: {
        chart: {
          zoom: {}
        },
        stroke: {
          curve: 'straight'
        },
        tooltip: {
          x: {
            show: true,
            formatter: function (val, opts) {
              return 1939 + val + '년';
            }
          },
          y: {
            show: true,
            formatter: function (val, opts) {
              return val + '명';
            }
          }
        },
        colors: ['var(--secondaryMain)', 'var(--primaryMain)'],
        xaxis: {
          type: 'category',
          labels: {
            formatter: function (value) {
              return value + 1939;
            }
          },
          tickAmount: 4
        },
        yaxis: {
          tickAmount: 5
        }
      }
    };
  }
  render() {
    return (
      <ApexCharts
        options={this.state.options}
        series={this.series}
        typs="line"
        height="100%"
      />
    );
  }
}
