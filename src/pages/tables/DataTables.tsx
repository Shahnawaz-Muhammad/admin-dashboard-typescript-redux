import { Grid } from "gridjs-react";
import { dataTableRecords } from "./data";
import { PageBreadcrumb } from "../../components";
import "gridjs/dist/theme/mermaid.min.css";

const DataTables = () => {
  return (
    <>
      <PageBreadcrumb
        name="Users"
        title="Users"
        breadCrumbItems={["Innovista", "Menu", "Users"]}
      />
      <div className="flex flex-col gap-6">
        <div className="card">
          <div className="p-6">
            <Grid
              data={dataTableRecords}
              pagination={{ enabled: true, limit: 10 }}
              search={true}
              sort={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTables;
