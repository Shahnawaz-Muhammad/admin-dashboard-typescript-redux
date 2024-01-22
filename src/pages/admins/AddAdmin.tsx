import { FormInput, PageBreadcrumb, VerticalForm } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const AddAdmin = () => {
  interface UserData {
    userName: string;
    email: string;
    password: string;
    station: string;
    role: string;
    status: string;
  }

  const schemaResolver = yupResolver(
    yup.object().shape({
      userName: yup.string().required("Please Enter User Name"),
      email: yup.string().required("Please Enter Email"),
      password: yup.string().required("Please Enter Password"),
      station: yup.string().required("Please Select station"),
      role: yup.string().required("Please Select role"),
      status: yup.string().required("Please Select status"),
    })
  );

  const handleFormData = async (formData: UserData) => {
    try {
      const response = await fetch(
        `http://192.168.150.134:8080/api/add-admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
            station: formData.station,
            role: formData.role,
            status: formData.status,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      console.log(data);
      // if (JSON.stringify(data) !== JSON.stringify(stations)) {
      //   setStations(data);
      // }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <PageBreadcrumb
        title="Form Validation"
        name="Add Admin"
        breadCrumbItems={["Innovista", "Admin", "Add Admin"]}
      />

      <div className="flex flex-col gap-6">
        <div className="card">
          <div className="card-header">
            <div className="flex justify-between items-center">
              <h4 className="card-title">Add Admin Form</h4>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-4">
              More details about React-hook-form please read{" "}
              <a
                target="_blank"
                href="https://www.react-hook-form.com/"
                className="text-primary"
              >
                on here
              </a>
            </p>
            <VerticalForm<UserData>
              onSubmit={handleFormData}
              resolver={schemaResolver}
              formClass="valid-form grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
            >
              <FormInput
                name="userName"
                type="text"
                label="User Name"
                labelClassName="text-gray-800 text-sm font-medium inline-block mb-2"
                className="form-input"
              />

              <FormInput
                name="email"
                type="email"
                label="Email"
                labelClassName="text-gray-800 text-sm font-medium inline-block mb-2"
                className="form-input"
              />

              <FormInput
                name="password"
                type="password"
                label="Password"
                labelClassName="text-gray-800 text-sm font-medium inline-block mb-2"
                className="form-input"
              />

              <FormInput
                name="station"
                type="select"
                label="Station"
                labelClassName="text-gray-800 text-sm font-medium inline-block mb-2"
                className="form-input"
              >
                <option value="">Choose...</option>
                <option value="station1">Station 1</option>
                <option value="station2">Station 2</option>
              </FormInput>

              <FormInput
                name="role"
                type="select"
                label="Role"
                labelClassName="text-gray-800 text-sm font-medium inline-block mb-2"
                className="form-input"
              >
                <option value="">Choose...</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </FormInput>

              <FormInput
                name="status"
                type="text"
                label="Status"
                labelClassName="text-gray-800 text-sm font-medium inline-block mb-2"
                className="form-input"
              />

              <div className="form-group lg:col-span-3 sm:col-span-2 col-span-1">
                <div className="form-check flex items-center">
                  <FormInput
                    name="checkbox"
                    type="checkbox"
                    className="form-checkbox rounded"
                    id="checked-demo"
                    defaultChecked
                    required
                  />

                  <label className="ms-1.5" htmlFor="checked-demo">
                    I agree to the Terms of Use
                  </label>
                </div>
              </div>

              <div className="form-group lg:col-span-3 sm:col-span-2 col-span-1">
                <button type="submit" className="btn bg-primary text-white">
                  Register Now
                </button>
              </div>
            </VerticalForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAdmin;
