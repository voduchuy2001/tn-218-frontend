import axios from "axios";
import { Formik, useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ChangePassword = () => {
  const navigate=useNavigate()
  
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object(
        {
            oldPassword: Yup.string().required("Vui lòng nhập mật khẩu cũ."),
            newPassword: Yup.string().required("Vui lòng nhập mật khẩu mới."),
            confirmNewPassword: Yup.string()
              .required("Vui lòng xác nhận mật khẩu mới.")
              .oneOf([Yup.ref("newPassword"), null], "Mật khẩu không trùng khớp."),
          }
    ),
    onSubmit: (value)=>{
      axios
      .post(
        "http://127.0.0.1:8000/api/auth/change-password",
        {
          old_password: value.oldPassword,
          new_password: value.newPassword,
          new_password_confirmation: value.confirmNewPassword,
        },
        {headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
      )
      .then((res) => {
        console.log(res);
        alert("Change Password Success");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
              alt
            />
          </div>
          <div className="col l-8 md-12 c-12">
            <form
              method="get"
              action="./login.html"
              id="fChangePassword"
              className="mobile:p-5 pc:p-32 tablet:p-5"
              onSubmit={formik.handleSubmit}
            >
              <h2 className="font-semibold text-[24px] text-center">
                Đổi mật khẩu
              </h2>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="oldPassword"
                >
                  Mật khẩu cũ
                </label>
                <input
                  name="oldPassword"
                  placeholder="Vui lòng nhập mật khẩu cũ..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${
                    formik.errors.oldPassword
                      ? `border-red-500 border border-solid`
                      : `border-green-500 border border-solid`
                  }`}
                  type="password"
                  id="oldPassword"
                  value={formik.values.oldPassword}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600">
                  {formik.errors.oldPassword && formik.errors.oldPassword}
                </span>
              </div>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="newPassword"
                >
                  Mật khẩu mới
                </label>
                <input
                  name="newPassword"
                  placeholder="Vui lòng nhập mật khẩu mới..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${
                    formik.errors.newPassword
                      ? `border-red-500 border border-solid`
                      : `border-green-500 border border-solid`
                  }`}
                  type="password"
                  id="newPassword"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600">
                  {formik.errors.newPassword && formik.errors.newPassword}
                </span>
              </div>
              <div className=" form-group row m-[24px_0px]">
                <label
                  className="col l-4 md-12 c-12 tablet:pb-2 mobile:pb-2"
                  htmlFor="confirmNewPassword"
                >
                  Nhập lại mật khẩu mới
                </label>
                <input
                  name="confirmNewPassword"
                  placeholder="Vui lòng nhập lại mật khẩu..."
                  className={`focus-visible:outline-primary-color bg-blue-100 w-[280px] h-[32px] p-5 col l-8 md-12 c-12 ${
                    formik.errors.confirmNewPassword
                      ? `border-red-500 border border-solid`
                      : `border-green-500 border border-solid`
                  }`}
                  type="password"
                  id="confirmNewPassword"
                  value={formik.values.confirmNewPassword}
                  onChange={formik.handleChange}
                />
                <span className="error-message col l-o-4 text-red-600">
                  {formik.errors.confirmNewPassword &&
                    formik.errors.confirmNewPassword}
                </span>
              </div>
              {formik.isValid ? (
                  <button
                    type="submit"
                    className="button mb-4 tablet:w-full mobile:w-full float-right btn-primary"
                  >
                    Đổi mật khẩu
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="disabled button mb-4 tablet:w-full mobile:w-full float-right btn-disabled"
                  >
                    Đổi mật khẩu
                  </button>
                )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
