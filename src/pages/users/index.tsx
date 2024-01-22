import { Grid } from "gridjs-react";
import { records } from "../tables/data";
import { PageBreadcrumb } from "../../components";
import "gridjs/dist/theme/mermaid.min.css";

const Bookings = () => {
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
              data={records}
              pagination={{ enabled: true, limit: 10 }}
              search={true}
              sort={true}
              columns={[
                {
                  name: "ID",
                  width: "100px",
                },
                "First Name",
                "Last Name",
                "Email",
                "Category",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
