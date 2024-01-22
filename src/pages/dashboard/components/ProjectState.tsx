// components
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ProjectDetail {
  key: number;
  title: string;
  monthlyTargetChartOpts: ApexOptions;
  series: number[];
}
const ProjectState = (props: ProjectDetail) => {
  return (
    <div className="col-span-1">
      <div className="card">
        <div className="p-6">
          <h4 className="card-title">{props.title}</h4>
          <ReactApexChart
            className="apex-charts my-8"
            options={props.monthlyTargetChartOpts}
            height={220}
            series={props.series}
            type="donut"
          />
          <div className="flex justify-center">
            <div className="w-1/2 text-center">
              <h5>Pending</h5>
              <p className="fw-semibold text-muted">
                <i className="mgc_round_fill text-primary"></i> Projects
              </p>
            </div>
            <div className="w-1/2 text-center">
              <h5>Done</h5>
              <p className="fw-semibold text-muted">
                <i className="mgc_round_fill text-success"></i> Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectState;
