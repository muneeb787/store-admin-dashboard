import { Field, FormikProvider, useFormik } from "formik";
import useAxios from "../../../hooks/axios";
import { toast } from "react-toastify";
// import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "Yup";
import { useEffect } from "react";


const Category = () => {

  useEffect(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') == "undefined") {
      navigate('/login')
    }
  }, [])


  const axiosInstance = useAxios();
  const schema = Yup.object({
    name: Yup.string().min(3).max(30).required("Required"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      axiosInstance
        .post('/category', values) // Replace '/api/your-endpoint' with your API endpoint
        .then((response) => {
          console.log('Form submitted successfully:', response.data);

          // You can handle success actions here
          resetForm();
          toast.success("Category Created successfully")
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          // You can handle error actions here
        })
        .finally(() => {
          setSubmitting(false); // Set form to not submitting
        });
    },

    // onSubmit:(values)=>console.log(values),
  });
  return (
    <>
      <FormikProvider value={formik}>
        {/* <form > */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Category Form
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit} >
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <Field
                  name="name"
                  placeholder="Enter Category"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.name && formik.errors.name && <h3>{formik.errors.name}</h3>}
              </div>

              <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                ADD
              </button>
            </div>
          </form>
        </div>
    </FormikProvider >
    </>
  );
};

export default Category;
