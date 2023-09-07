import React from "react";
import ReactApexChart from "react-apexcharts";

class WorkLoadCart extends React.Component {
  constructor(props) {
    super(props);
    const { workHour } = props;

    this.state = {
      options: {
        chart: {
          type: "bar",
          width: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: [workHour.date],
        },
        yaxis: {
          max: 8,
        },
      },
      series: [
        {
          name: "Work Hour",
          data: [workHour?.totalWorkloadHours || 1],
        },
      ],
    };
  }

  render() {
    return (
      <div className="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={100}
        />
      </div>
    );
  }
}

export default WorkLoadCart;
