import { PageBreadcrumb } from "../../components";
import AllAdmins from "./AllAdmins";

const Admins = () => {
    return (
      <>
        <PageBreadcrumb
          title="Basic Table"
          name="Basic Table"
          breadCrumbItems={["Innovista", "Table", "Basic Table"]}
        />
        <div className="grid grid-cols-1 gap-6">
          <AllAdmins />
        </div>
      </>
    );
  };
  
  export default Admins;