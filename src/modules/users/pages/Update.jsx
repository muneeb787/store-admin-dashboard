import { Field, FormikProvider, useFormik } from 'formik';
import useAxios from '../../../hooks/axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as yup from 'yup';

const Update = () => {
  const navigate = useNavigate();
  const axiosInstance = useAxios();
  const { userId } = useParams(); // Assuming you have a route parameter for the user ID

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') == "undefined") {
      navigate('/login')
  }
    axiosInstance
      .get(`/user/${userId}`)
      .then((res) => {
        toast.success(res.data.message);
        // Set the user data for populating the form
        setUserData(res.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [axiosInstance, userId]);

  const schema = yup.object().shape({
    name: yup.string().required('Required').min(3).max(30),
    email: yup
      .string()
      .email('This must be an Email')
      .required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters'), // Remove 'required' for password
    role: yup.string().required('Required').min(3),
    address: yup.object().shape({
      country: yup.string().required('Required').min(3).max(30),
      city: yup.string().required('Required').min(3).max(30),
      house: yup.string().required('Required').min(3).max(30),
      postal_code: yup.string().required('Required').min(3).max(30),
    }),
    number: yup.string().required('Required').min(11).max(13),
  });

  const formik = useFormik({
    initialValues: {
      name: userData ? userData.name : '',
      email: userData ? userData.email : '',
      password: '', // Clear password field for update
      role: userData ? userData.role : '',
      address: {
        country: userData ? userData.address.country : '',
        city: userData ? userData.address.city : '',
        house: userData ? userData.address.house : '',
        postal_code: userData ? userData.address.postal_code : '',
      },
      number: userData ? userData.number : '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values, 'valuessssssssssssssssssssss');
      axiosInstance
        .put(`/user/${userId}`, values) // Assuming a PUT request for updating the user
        .then((response) => {
          console.log('Form submitted successfully:', response.data);
          toast.success('User updated successfully');
          navigate(-1);
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
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
                  type="password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.password && formik.errors.password && (
                  <h3>{formik.errors.password}</h3>
                )}
              </div>
              {/* role */}
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
              {/* Address */}
              <div className="mb-4.5">
                <label className="block text-black dark:text-white">
                  Address
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {/* House */}
                  <div>
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
                  {/* Street */}
                  <div>
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
                </div>
              </div>
              {/* City */}
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
              {/* Country */}
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
              {/* Postal Code */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Postal Code
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
              {/* Number */}
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
