import useDateTime from "hooks/useDateTime";
import React from "react";
import ReactApexChart from "react-apexcharts";

class WorkLoadCart extends React.Component {
  constructor(props) {
    super(props);
    const { workHour } = props;
    const { presentDate } = useDateTime();

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
          categories: [workHour?.date || presentDate],
        },
        yaxis: {
          max: 8,
        },
      },
      series: [
        {
          name: "Work Hour",
          data: [workHour || 1],
        },
      ],
    };
  }

  render() {
    return (
      <div className="chart">
        <ReactApexChart
          options={this.state?.options}
          series={this.state?.series}
          type="bar"
          height={100}
        />
      </div>
    );
  }
}

export default WorkLoadCart;
