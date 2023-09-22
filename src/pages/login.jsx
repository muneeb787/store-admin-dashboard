import { FormikProvider, useFormik, Field } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'Yup'
import useAxios from '../hooks/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const loginUser = yup.object({
    email: yup.string().email("This must be an Email").required('Email is required'),
    password: yup.string().required('Password is required').min(8, "Password Must be at least 8 characters")
})

const Login = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('token') != "undefined" ) {
            navigate('/dashboard')
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginUser,
        onSubmit: (values) => {
            const axiosInstance = useAxios();
            axiosInstance.post('/login', values)
                .then(res => {
                    console.log(res);
                    toast.success("Logged In Successfully")
                    localStorage.setItem('token', res.data.accessToken
                    );
                    navigate("/dashboard")
                })
                .catch(err => {
                    toast.error(err.response.data.message)
                    console.log(err);
                })
        }
    })
    // formik.setFieldValue("email" , "ali@gmail.com")
    const { touched, errors, values } = formik;

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="sm:w-full sm:max-w-sm p-6 bg-white rounded-lg shadow-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h1 className='mt-6 text-center text-0.5xl leading-9 text-gray-500'>Welcome To Store Dashboard</h1>
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 text-gray-900">
                    Sign in to your account
                </h2>
                <FormikProvider value={formik}>
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder='Ali@gmail.com'
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {formik.touched.email && formik.errors.email && <h6 style={{ color: "red" }}>{formik.errors.email}</h6>}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder='Make a Strong password'
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {formik.touched.password && formik.errors.password && <h6 style={{ color: "red" }}>{formik.errors.password}</h6>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={formik.handleSubmit}
                            >
                                Sign in
                            </button>

                        </div>
                    </form>
                </FormikProvider>
            </div>
        </div>
    );
};

export default Login;
