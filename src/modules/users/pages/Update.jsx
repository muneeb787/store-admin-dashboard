import { Field, FormikProvider, useFormik } from 'formik';
import useAxios from '../../../hooks/axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import * as yup from 'Yup';

const Update = () => {
  const { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  console.log(userData);
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get(`/user/${id}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const schema = yup.object({
    name: yup.string().required('Required').min(3).max(30),
    email: yup
      .string()
      .email('This must be an Email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password Must be at least 8 characters'),
    role: yup.string().required('Required').min(4),
    house: yup.string().required('Required').min(3).max(30),
    street: yup.string().required('Required').min(3).max(30),
    city: yup.string().required('Required').min(3).max(30),
    country: yup.string().required('Required').min(3).max(30),
    postal_code: yup.string().required('Required').min(3).max(30),
    number: yup.string().required('Required').min(11).max(13),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
      house: '',
      street: '',
      city: '',
      country: '',
      postal_code: '',
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('Bookh Lgi Hai ;(');
      axiosInstance
        .put(`/user/${id}`, values)
        .then((response) => {
          console.log('Form submitted successfully:', response.data);

          resetForm();
          toast.success('User Updated successfully');
          navigate(-1);
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <FormikProvider value={formik}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Update User
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6.5">
              {/* Name */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <Field
                  name="name"
                  placeholder={userData.name}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.name && formik.errors.name && (
                  <h3>{formik.errors.name}</h3>
                )}
              </div>
              {/* email */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email
                </label>
                <Field
                  name="email"
                  placeholder={userData.email}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.email && formik.errors.email && (
                  <h3>{formik.errors.email}</h3>
                )}
              </div>
              {/* password */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Password
                </label>
                <Field
                  name="password"
                  placeholder={userData.password}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.password && formik.errors.password && (
                  <h3>{formik.errors.password}</h3>
                )}
              </div>
              {/*  role */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Role
                </label>
                <Field
                  name=" role"
                  placeholder={userData.role}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.role && formik.errors.role && (
                  <h3>{formik.errors.role}</h3>
                )}
              </div>
              {/* house */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  House
                </label>
                <Field
                  name="house"
                  placeholder={userData.house}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.house && formik.errors.house && (
                  <h3>{formik.errors.house}</h3>
                )}
              </div>
              {/*    street */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Street
                </label>
                <Field
                  name="   street"
                  placeholder={userData.street}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.street && formik.errors.street && (
                  <h3>{formik.errors.street}</h3>
                )}
              </div>
              {/* city */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  City
                </label>
                <Field
                  name="city"
                  placeholder={userData.city}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.city && formik.errors.city && (
                  <h3>{formik.errors.city}</h3>
                )}
              </div>
              {/* country */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Country
                </label>
                <Field
                  name="country"
                  placeholder={userData.country}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.country && formik.errors.country && (
                  <h3>{formik.errors.country}</h3>
                )}
              </div>
              {/* postal_code */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Postal_code
                </label>
                <Field
                  name="postal_code"
                  placeholder={userData.postal_code}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.postal_code && formik.errors.postal_code && (
                  <h3>{formik.errors.postal_code}</h3>
                )}
              </div>
              {/* number */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Number
                </label>
                <Field
                  name="number"
                  placeholder={userData.number}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.number && formik.errors.number && (
                  <h3>{formik.errors.number}</h3>
                )}
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </FormikProvider>
    </>
  );
};

export default Update;
