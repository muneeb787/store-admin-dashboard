import { Field, FormikProvider, useFormik, getIn } from 'formik';
import useAxios from '../../../hooks/axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as yup from 'yup';
const Create = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  // const addressSchema = yup.object({
  //   country: yup.string().required('Required').min(3).max(30),
  //   city: yup.string().required('Required').min(3).max(30),
  //   house: yup.string().required('Required').min(3).max(30),
  //   postal_code: yup.string().required('Required').min(3).max(30),
  // });

  const schema = yup.object().shape({
    name: yup.string().required('Required').min(3).max(30),
    email: yup
      .string()
      .email('This must be an Email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    role: yup.string().required('Required').min(3),
    address: yup.object().shape({
      country: yup.string().required('Required').min(3).max(30),
      city: yup.string().required('Required').min(3).max(30),
      house: yup.string().required('Required').min(3).max(30),
      postal_code: yup.string().required('Required').min(3).max(30),
    }), // Include the address object within your main schema
    number: yup.string().required('Required').min(11).max(13),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
      address: {
        // Provide an empty object for the address field
        house: '',
        street: '',
        city: '',
        country: '',
        postal_code: '',
      },
      number: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values, 'valuessssssssssssssssssssss');
      axiosInstance
        .post(`/user`, values)
        .then((response) => {
          console.log('Form submitted successfully:', response.data);

          // resetForm();
          toast.success('User Created successfully');
          navigate(-1);
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
        })
        .finally(() => {
          // setSubmitting(false);
        });
    },
  });

  return (
    <>
      <FormikProvider value={formik}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create User
            </h3>
          </div>
          <form>
            <div className="p-6.5">
              {/* Name */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Name
                </label>
                <Field
                  name="name"
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
                  name="role"
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
                  name="address.house"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {getIn(formik.touched, 'address.house') &&
                  getIn(formik.errors, 'address.house') && (
                    <h3>{getIn(formik.errors, 'address.house')}</h3>
                  )}
              </div>
              {/*    street */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Street
                </label>
                <Field
                  name="address.street"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {getIn(formik.touched, 'address.street') &&
                  getIn(formik.errors, 'address.street') && (
                    <h3>{getIn(formik.errors, 'address.street')}</h3>
                  )}
              </div>
              {/* city */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  City
                </label>
                <Field
                  name="address.city"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {getIn(formik.touched, 'address.city') &&
                  getIn(formik.errors, 'address.city') && (
                    <h3>{getIn(formik.errors, 'address.city')}</h3>
                  )}
              </div>
              {/* country */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Country
                </label>
                <Field
                  name="address.country"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {getIn(formik.touched, 'address.country') &&
                  getIn(formik.errors, 'address.country') && (
                    <h3>{getIn(formik.errors, 'address.country')}</h3>
                  )}
              </div>
              {/* postal_code */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Postal_code
                </label>
                <Field
                  name="address.postal_code"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {getIn(formik.touched, 'address.postal_code') &&
                  getIn(formik.errors, 'address.postal_code') && (
                    <h3>{getIn(formik.errors, 'address.postal_code')}</h3>
                  )}
              </div>
              {/* number */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Number
                </label>
                <Field
                  name="number"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.number && formik.errors.number && (
                  <h3>{formik.errors.number}</h3>
                )}
              </div>
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </FormikProvider>
    </>
  );
};

export default Create;
