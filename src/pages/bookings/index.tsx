import { Grid } from "gridjs-react";
import { dataTableRecords } from "../tables/data";
import { PageBreadcrumb } from "../../components";
import "gridjs/dist/theme/mermaid.min.css";

const Bookings = () => {
  return (
    <>
      <PageBreadcrumb
        name="Bookings"
        title="Bookings"
        breadCrumbItems={["Innovista", "Menu", "Bookings"]}
      />
      <div className="flex flex-col gap-6">
        <div className="card">
          <div className="p-6">
            <Grid
              data={dataTableRecords}
              pagination={{ enabled: true, limit: 10 }}
              search={true}
              sort={true}
              columns={[
                {
                  name: "ID",
                  width: "80px",
                },
                "Name",
                "Email",
                "Station",
                {
                  name: "Booking Date",
                  width: "140px",
                },
                {
                  name: "Expiry Date",
                  width: "130px",
                },
                {
                  name: "Booking Time",
                  width: "140px",
                },
                {
                  name: "Expiry Time",
                  width: "140px",
                },

                {
                  name: "User Type",
                  width: "140px",
                },
                {
                  name: "Status",
                  width: "120px",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
