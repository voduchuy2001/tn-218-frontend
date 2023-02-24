import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

const Register = () => {
  const navigate=useNavigate()
  
  // validate
  const formik = useFormik({
    initialValues: {
      "email" : "",
      "fullname" : "",
      "password" : "",
      "confirmPassword" : ""

    },
    //Rules
    validationSchema: Yup.object({
      "email" : Yup.string().required("Vui lòng nhập email.")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email không hợp lệ."),
      "fullname" : Yup.string().required("Vui lòng nhập họ và tên."),
      "password" : Yup.string().required("Vui lòng nhập mật khẩu."),
      "confirmPassword" : Yup.string().required("Vui lòng nhập xác nhận mật khẩu.")
      .oneOf([Yup.ref("password"), null], "Mật khẩu không trùng khớp."),
    }),
    onSubmit: (value) => {
      axios
        .post("http://127.0.0.1:8000/api/auth/register/", {
          name: value.fullname,
          email: value.email,
          password: value.password,
          password_confirmation: value.confirmPassword
        })
        .then((res) => {
          console.log(res.data);
          navigate("/login")
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  return (
    <div className="py-[100px] mobile:px-[20px] min-h-screen bg-gradient-to-tr from-white to-blue-100">
      <div className="grids wide bg-white rounded-lg h-[50%] shadow-md">
        <div className="row">
          <div className="col l-4 md-12 c-12">
            <img
              className="mobile:hidden h-full w-full"
              src="https://plus.unsplash.com/premium_photo-1670282654525-62fed9d7d4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt
            />
          </div>
          <div className="col l-8 md-12 c-12">
            <form
              method="get"
              action="./register.html"
              className="mobile:p-5 pc:p-32 tablet:p-5"
              onSubmit={formik.handleSubmit}
            >
              <h2 className="font-semibold text-[24px] text-center">
                Đăng ký tài khoản
              </h2>
              <span>
                Đã có tài khoản?<Link className='hover:underline' to="/login"> Đăng nhập</Link>
              </span>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Vui lòng nhập email..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${formik.errors.email ? `border-red-500 border border-solid` : `border-green-500 border border-solid`}`}
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600" >{formik.errors.email && formik.errors.email}</span>
              </div>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="fullname"
                >
                  Họ và tên
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  placeholder="Vui lòng nhập họ và tên..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${formik.errors.fullname ? `border-red-500 border border-solid` : `border-green-500 border border-solid`}`}
                  type="text"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600" >{formik.errors.fullname && formik.errors.fullname}</span>
              </div>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="password"
                >
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  placeholder="Vui lòng nhập mật khẩu..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${formik.errors.password ? `border-red-500 border border-solid` : `border-green-500 border border-solid`}`}
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600" >{formik.errors.password && formik.errors.password}</span>
              </div>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="confirmPassword"
                >
                  Nhập lại mật khẩu
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Vui lòng nhập lại mật khẩu..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${formik.errors.confirmPassword ? `border-red-500 border border-solid` : `border-green-500 border border-solid`}`}
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600" >{formik.errors.confirmPassword && formik.errors.confirmPassword}</span>
              </div>
              {/* Nếu form hợp lệ */}
              {formik.isValid ? (
                <button
                type="submit"
                className="button mb-4 tablet:w-full mobile:w-full float-right btn-primary"
              >
                Đăng ký
              </button>
              ) : (
                <button
                type="submit"
                className="disabled button mb-4 tablet:w-full mobile:w-full float-right btn-disabled"
              >
                Đăng ký
              </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register