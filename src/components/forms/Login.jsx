import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  increment
} from "../../features/counter/counterSlice"
import {useDispatch } from 'react-redux';

const Login = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate();
    // validate
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        //Rules
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Vui lòng nhập email.")
                .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email không hợp lệ."),
            password: Yup.string().required("Vui lòng nhập mật khẩu."),
        }),
        onSubmit: (value) => {
            axios
                .post("http://127.0.0.1:8000/api/auth/login/", {
                    email: value.email,
                    password: value.password,
                })
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem("access_token", res.data.access_token);
                    localStorage.setItem("user", res.data.user.name);
                    dispatch(increment())
                    navigate("/");
                })
                .catch((error) => {
                    alert("Lỗi thông tin đăng nhập!!!");
                    console.error(error);
                });
        },
    });

    return (
        <div className="py-[100px] mobile:px-[20px] min-h-screen bg-gradient-to-tr from-white to-blue-100">
            <div className="grids wide bg-white rounded-lg h-[50%] shadow-md">
                <div className="row">
                    <div className="col l-4 md-12 c-12">
                        <img
                            className="h-full w-full mobile:hidden"
                            src="https://plus.unsplash.com/premium_photo-1670282654525-62fed9d7d4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            alt=""
                        />
                    </div>
                    <div className="col l-8 md-12 c-12">
                        <form
                            method="get"
                            action="./login.html"
                            className="mobile:p-5 pc:p-32 tablet:p-5"
                            onSubmit={formik.handleSubmit}
                        >
                            <h2 className="font-semibold text-[24px] text-center">
                                Đăng nhập
                            </h2>
                            <span>
                                Chưa có tài khoản?
                                <Link
                                    className="ml-1 hover:underline"
                                    to="/register"
                                >
                                    Đăng ký
                                </Link>
                            </span>
                            <div className="form-group row m-[24px_0px]">
                                <label
                                    className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    name="email"
                                    placeholder="Vui lòng nhập email..."
                                    className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${
                                        formik.errors.email
                                            ? `border-red-500 border border-solid`
                                            : `border-green-500 border border-solid`
                                    }`}
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                <span className="error-message col l-o-4 text-red-600">
                                    {formik.errors.email && formik.errors.email}
                                </span>
                            </div>
                            <div className="form-group row m-[24px_0px]">
                                <label
                                    className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                                    htmlFor="password"
                                >
                                    Mật khẩu
                                </label>
                                <input
                                    name="password"
                                    placeholder="Vui lòng nhập mật khẩu..."
                                    className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${
                                        formik.errors.password
                                            ? `border-red-500 border border-solid`
                                            : `border-green-500 border border-solid`
                                    }`}
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <span className="error-message col l-o-4 text-red-600">
                                    {formik.errors.password &&
                                        formik.errors.password}
                                </span>
                            </div>
                            <div className="flex justify-end">
                                {/* Nếu form hợp lệ */}
                                {formik.isValid ? (
                                    <button
                                        type="submit"
                                        className="button mb-4 tablet:w-full mobile:w-full float-right btn-primary"
                                    >
                                        Đăng Nhập
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="disabled button mb-4 tablet:w-full mobile:w-full float-right btn-disabled"
                                    >
                                        Đăng Nhập
                                    </button>
                                )}
                            </div>
                            <div className="border-t-slate-200 border-solid border-t">
                                <p className="text-center">or</p>
                            </div>
                            <div className="flex justify-evenly">
                                <span>
                                    <div className="text-center px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                                        <span>Google</span>
                                        <span>
                                            <i className="fab fa-google p-1" />
                                        </span>
                                    </div>
                                </span>
                                <span>
                                    <div className="text-center px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        <span>Facebook</span>
                                        <span>
                                            <i className="fab fa-facebook p-1" />
                                        </span>
                                    </div>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
