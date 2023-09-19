import { Field, FormikProvider, useFormik } from "formik";
import useAxios from "../../../hooks/axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import * as Yup from "Yup";


const Create = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const axiosInstance = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') == "undefined") {
      navigate('/login')
    }
    axiosInstance.get("/category")
      .then((res) => {
        toast.success(res.data.message);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const schema = Yup.object({
    name: Yup.string().min(3).max(30).required("Required"),
    price: Yup.number().min(0).max(100000).required("Required"),
    description: Yup.string().min(3).max(200).required("Required"),
    catagory_id: Yup.string(),
    // image: Yup.mixed().required("Image is required"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      catagory_id: "",
      // image: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const formData = new FormData(); // Fix the typo here
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.append("image", selectedFile)

      console.log(values);
      console.log(formData);

      for (var pair of formData.entries()) {
        console.log(pair)
        console.log(pair[0], pair[1]);
      }


      axiosInstance.post('/product', formData)
        .then((response) => {
          console.log('Form submitted successfully:', response.data);
          toast.success("Product Created successfully");
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          toast.error("Error creating product");
        });
    },
  });



  return (
    <>

      <FormikProvider value={formik}>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Product Form
            </h3>
          </div>
          <form encType="multipart/form-data">
            <div className="p-6.5">

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <Field
                  name="name"
                  placeholder="Enter Product Name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.name && formik.errors.name && <h3>{formik.errors.name}</h3>}
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Price
                </label>
                <Field
                  name="price"
                  placeholder="Enter Product Price"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.price && formik.errors.price && <h3>{formik.errors.price}</h3>}
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Description
                </label>
                <Field
                  name="description"
                  placeholder="Enter Description"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.description && formik.errors.description && <h3>{formik.errors.description}</h3>}
              </div>


                <div className="mb-4.5">
                  <label className="mb-3 block text-black dark:text-white">
                    Select Category
                  </label>
                  <div className="relative z-20 bg-white dark:bg-form-input">
                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                            fill="#637381"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                            fill="#637381"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <Field as="select" name="catagory_id" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                      <option value="">Select Category</option>
                      {data.map((ele) => (
                        <option value={ele._id}>{ele.name}</option>
                      ))}
                      {formik.touched.category && formik.errors.category && <h3>{formik.errors.category}</h3>}
                    </Field>
                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-black dark:text-white">
                      Attach Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleFileChange}
                      // onChange={(e) =>
                      //   formik.setFieldValue('image', e.currentTarget.files[0])}
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                    {formik.touched.image && formik.errors.image && <h3>{formik.errors.image}</h3>}
                  </div>



              {/* <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div> */}

              <button type="button" onClick={formik.handleSubmit} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                ADD
              </button>
            </div>
          </form>
        </div>

      </FormikProvider>
    </>
  );
};

export default Create;
