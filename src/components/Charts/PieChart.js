import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    const { leaveCount, clockedInLength, clockedOutLength } = props;

    const leaveNumber = leaveCount > 0 ? leaveCount : 1;
    const clockInNumber = clockedInLength > 0 ? clockedInLength : 1;
    const clockOutNumber = clockedOutLength > 0 ? clockedOutLength : 1;

    super(props);

    this.state = {
      options: {
        chart: {
          type: "pie",
          type: "pie",
          width: "100%",
          height: "100%",
        },
        labels: ["Clocked In Users", "Clocked Out Users", "Users on Leave"],
      },
      series: [clockInNumber, clockOutNumber, leaveNumber],
    };
  }

  render() {
    return (
      <div className="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={350}
        />
      </div>
    );
  }
}

export default PieChart;
