import { FormikProvider, useFormik, Field } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'Yup';
import useAxios from '../../../hooks/axios';

const getUser = yup.object({
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

const Update = () => {
  const axiosInstance = useAxios();
  const [users, setUsers] = useState([]);
  useEffect(() => {}, []);

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
    validationSchema: getUser,
    onSubmit: (values) => {
      axiosInstance
        .put('/user/:id', values)
        .then((res) => {
          console.log(res.data.users);
          setUsers(res.data.users);
          console.log(users, 'User loaded');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="">
      <div className="w-full border-2 p-6 m-auto bg-white rounded-md shadow-md ring-2 ">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
          Update User
        </h2>
        <FormikProvider value={formik}>
          <form className="">
            <div className="flex p-6">
              {/* //UserName */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder=" Ali"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <h6 style={{ color: 'red' }}>{formik.errors.name}</h6>
                  )}
                </div>
              </div>
              {/* //UserEmail */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder=" Ali@gmail.com"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <h6 style={{ color: 'red' }}>{formik.errors.email}</h6>
                  )}
                </div>
              </div>
            </div>
            <div className="flex p-6">
              {/* //UserPassword */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <Field
                    id="password"
                    name="password"
                    type="text"
                    autoComplete="password"
                    required
                    placeholder=" Password"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <h6 style={{ color: 'red' }}>{formik.errors.password}</h6>
                  )}
                </div>
              </div>
              {/* //UserRole */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="role"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Role
                </label>
                <div className="mt-2">
                  <Field
                    id="role"
                    name="role"
                    type="text"
                    autoComplete="role"
                    required
                    placeholder=" User"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.role && formik.errors.role && (
                    <h6 style={{ color: 'red' }}>{formik.errors.role}</h6>
                  )}
                </div>
              </div>
            </div>
            {/* //Address Heading */}
            <div className="flex p-6">
              {/* //UserHouse */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="house"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  House No.
                </label>
                <div className="mt-2">
                  <Field
                    id="house"
                    name="house"
                    type="text"
                    autoComplete="house"
                    required
                    placeholder=" H#666 E"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.house && formik.errors.house && (
                    <h6 style={{ color: 'red' }}>{formik.errors.house}</h6>
                  )}
                </div>
              </div>
              {/* //UserStreet */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="street"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Street
                </label>
                <div className="mt-2">
                  <Field
                    id="street"
                    name="street"
                    type="text"
                    autoComplete="street"
                    required
                    placeholder=" Street"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.street && formik.errors.street && (
                    <h6 style={{ color: 'red' }}>{formik.errors.street}</h6>
                  )}
                </div>
              </div>
            </div>
            <div className="flex p-6 ">
              {/* //UserCity */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="city"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <Field
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    required
                    placeholder=" City"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.city && formik.errors.city && (
                    <h6 style={{ color: 'red' }}>{formik.errors.city}</h6>
                  )}
                </div>
              </div>
              {/* //UserCountry */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="country"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <Field
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    required
                    placeholder=" Country"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.country && formik.errors.country && (
                    <h6 style={{ color: 'red' }}>{formik.errors.country}</h6>
                  )}
                </div>
              </div>
            </div>
            <div className="flex p-6">
              {/* //UserPostal_Code */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="postal_code"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Postal Code
                </label>
                <div className="mt-2">
                  <Field
                    id="postal_code"
                    name="postal_code"
                    type="text"
                    autoComplete="postal_code"
                    required
                    placeholder=" Postal_code"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.postal_code && formik.errors.postal_code && (
                    <h6 style={{ color: 'red' }}>
                      {formik.errors.postal_code}
                    </h6>
                  )}
                </div>
              </div>
              {/* //UserNumber */}
              <div className="flex-none p-6 mx-6">
                <label
                  htmlFor="number"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Number
                </label>
                <div className="mt-2">
                  <Field
                    id="number"
                    name="number"
                    type="text"
                    autoComplete="number"
                    required
                    placeholder="03355566666"
                    className="w-full border-2 input input-bordered"
                  />
                  {formik.touched.number && formik.errors.number && (
                    <h6 style={{ color: 'red' }}>{formik.errors.number}</h6>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="text-lg p-6 mx-12 border-2"
                onClick={formik.handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Update;
