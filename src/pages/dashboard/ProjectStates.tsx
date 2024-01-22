// components
import { ProjectState } from "./components";
import { ApexOptions } from "apexcharts";

// data
import { projectStates } from "./data";
import ReactApexChart from "react-apexcharts";

const ProjectStates = () => {
  const categories: ApexOptions = {
    chart: {
      height: 220,
      type: "pie",
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
    },
    series: [12, 43, 23],
    labels: ["Freelancers", "Groups", "Companies"],
    colors: ["#0acf97", "#3073F1", "#FFA500"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const freelancers: ApexOptions = {
    chart: {
      height: 220,
      type: "pie",
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
    },
    series: [12, 43],
    labels: ["Active", "Inactive"],
    colors: ["#0acf97", "#3073F1"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const groups: ApexOptions = {
    chart: {
      height: 220,
      type: "pie",
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
    },
    series: [52, 18],
    labels: ["Active", "Inactive"],
    colors: ["#0acf97", "#3073F1"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const companies: ApexOptions = {
    chart: {
      height: 220,
      type: "pie",
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
    },
    series: [35, 62],
    labels: ["Active", "Inactive"],
    colors: ["#0acf97", "#3073F1"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-6 mb-6">
        <div className="col-span-1">
          <div className="card">
            <div className="p-6">
              <h4 className="card-title">Categories</h4>
              <ReactApexChart
                className="apex-charts my-8"
                options={categories}
                height={220}
                series={categories.series}
                type="pie"
              />
              <div className="flex justify-center">
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-primary"></i> Groups
                  </p>
                </div>
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-success"></i> Freelancers
                  </p>
                </div>
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-[#FFA500]"></i> Companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="card">
            <div className="p-6">
              <h4 className="card-title">Freelancers</h4>
              <ReactApexChart
                className="apex-charts my-8"
                options={freelancers}
                height={220}
                series={freelancers.series}
                type="pie"
              />
              <div className="flex justify-center">
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-primary"></i> Active
                  </p>
                </div>
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-success"></i> InActive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="card">
            <div className="p-6">
              <h4 className="card-title">Groups</h4>
              <ReactApexChart
                className="apex-charts my-8"
                options={groups}
                height={220}
                series={groups.series}
                type="pie"
              />
              <div className="flex justify-center">
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-primary"></i> Active
                  </p>
                </div>
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-success"></i> InActive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="card">
            <div className="p-6">
              <h4 className="card-title">Companies</h4>
              <ReactApexChart
                className="apex-charts my-8"
                options={companies}
                height={220}
                series={companies.series}
                type="pie"
              />
              <div className="flex justify-center">
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-primary"></i> Active
                  </p>
                </div>
                <div className="w-1/2 text-center">
                  <p className="fw-semibold text-muted">
                    <i className="mgc_round_fill text-success"></i> InActive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStates;
