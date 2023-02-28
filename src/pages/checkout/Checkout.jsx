import React from "react";

const Checkout = () => {
    return (
        <div className="bg-gradient-to-tl from-white to-blue-100 p-5">
            <div className="grids wide min-h-screen">
                <div className="row">
                    <div className="col l-12 md-12 c-12">
                        <div className="w-full h-[100px] flex items-center justify-center flex-col bg-blue-400">
                            <span className="text-black font-semibold text-[16px]">
                                TỔNG TIỀN: 10.00000.0000 đ
                            </span>
                            <span className="text-black uppercase font-semibold text-[16px]">
                                Số lượng sản phẩm: 10
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col l-6 c-12 md-12">
                        <div className="p-1 flex justify-center items-center">
                            <h3 className="font-semibold text-[24px] uppercase">
                                Thông tin khách hàng
                            </h3>
                            <a className="ml-2 text-blue-600 underline">
                                thay đổi
                            </a>
                        </div>
                        <form id="fCheckout" action className="p-5 shadow-lg">
                            <div className="form-group row my-4">
                                <label
                                    className="col l-4 md-12"
                                    htmlFor="fullname"
                                >
                                    Họ tên:
                                </label>
                                <input
                                    disabled
                                    type="text"
                                    name="fullname"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 md-12 c-12 w-full bg-blue-100 p-1"
                                    id="fullname"
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className="form-group row my-4">
                                <label
                                    className="col l-4 md-12 c-12"
                                    htmlFor="email"
                                >
                                    Email:
                                </label>
                                <input
                                    disabled
                                    type="email"
                                    name="email"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 md-12 c-12 w-full bg-blue-100 p-1"
                                    id="email"
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className="form-group row my-4">
                                <label
                                    className="col l-4 md-12 c-12"
                                    htmlFor="phone"
                                >
                                    Số điện thoại:
                                </label>
                                <input
                                    disabled
                                    type="tel"
                                    name="phone"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 md-12 c-12 w-full bg-blue-100 p-1"
                                    id="phone"
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className="form-group row my-4">
                                <label className="col l-4" htmlFor="address">
                                    Địa chỉ:
                                </label>
                                <textarea
                                    disabled
                                    name="address"
                                    className="focus:outline-none focus:border-[1px] focus:border-solid focus:border-primary-color col l-8 w-full bg-blue-100"
                                    id="address"
                                    defaultValue={""}
                                />
                                <span className="error-message col l-o-4 text-red-600" />
                            </div>
                            <div className=" border-[1px] border-solid border-[#aaa] p-3 my-3">
                                <h5 className="font-semibold">
                                    Phương thức thanh toán:
                                </h5>
                                <div className>
                                    <input
                                        defaultChecked
                                        type="radio"
                                        name="paymentMethods"
                                        defaultValue
                                        id="COD"
                                    />
                                    <label htmlFor="COD" className="ml-3">
                                        COD
                                    </label>
                                </div>
                                <div className>
                                    <input
                                        type="radio"
                                        name="paymentMethods"
                                        defaultValue
                                        id="COD"
                                    />
                                    <label htmlFor="COD" className="ml-3">
                                        Paypal
                                    </label>
                                </div>
                            </div>
                            <button
                                className="button btnCheckout uppercase btn-disabled w-full"
                                disabled
                            >
                                Vui lòng cập nhật đầy đủ thông tin
                            </button>
                            {/* Btn khi đang submit */}
                            <button
                                type="button"
                                style={{ display: "none" }}
                                className="loading mb-4 tablet:w-full mobile:w-full w-50 h-50 float-right items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-400 transition ease-in-out duration-150 cursor-not-allowed"
                                disabled
                            >
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx={12}
                                        cy={12}
                                        r={10}
                                        stroke="currentColor"
                                        strokeWidth={4}
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Đang đặt hàng...
                            </button>
                        </form>
                    </div>
                    <div className="col l-6 md-12 c-12 tablet:mt-5 mobile:mt-5">
                        <div className="p-5 shadow-lg h-[460px] overflow-auto">
                            <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                <img
                                    className=" shadow-md p-2 w-[60px] h-[60px]"
                                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg"
                                    alt
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        iPhone 13 Promax - Hồng 256GB
                                    </h4>
                                    <span>10.0000.0000 đ</span>
                                </div>
                                <div>
                                    <span className="text-[12px]">x&nbsp;</span>
                                    <span className="font-semibold text-[16px]">
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                <img
                                    className=" shadow-md p-2 w-[60px] h-[60px]"
                                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg"
                                    alt
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        iPhone 13 Promax - Hồng 256GB
                                    </h4>
                                    <span>10.0000.0000 đ</span>
                                </div>
                                <div>
                                    <span className="text-[12px]">x&nbsp;</span>
                                    <span className="font-semibold text-[16px]">
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                <img
                                    className=" shadow-md p-2 w-[60px] h-[60px]"
                                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg"
                                    alt
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        iPhone 13 Promax - Hồng 256GB
                                    </h4>
                                    <span>10.0000.0000 đ</span>
                                </div>
                                <div>
                                    <span className="text-[12px]">x&nbsp;</span>
                                    <span className="font-semibold text-[16px]">
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                <img
                                    className=" shadow-md p-2 w-[60px] h-[60px]"
                                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg"
                                    alt
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        iPhone 13 Promax - Hồng 256GB
                                    </h4>
                                    <span>10.0000.0000 đ</span>
                                </div>
                                <div>
                                    <span className="text-[12px]">x&nbsp;</span>
                                    <span className="font-semibold text-[16px]">
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                <img
                                    className=" shadow-md p-2 w-[60px] h-[60px]"
                                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg"
                                    alt
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        iPhone 13 Promax - Hồng 256GB
                                    </h4>
                                    <span>10.0000.0000 đ</span>
                                </div>
                                <div>
                                    <span className="text-[12px]">x&nbsp;</span>
                                    <span className="font-semibold text-[16px]">
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className="last:border-0 p-2 my-2 flex items-center justify-between border-b-[1px] border-solid border-[#aaa]">
                                <img
                                    className=" shadow-md p-2 w-[60px] h-[60px]"
                                    src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-4_2.jpg"
                                    alt
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        iPhone 13 Promax - Hồng 256GB
                                    </h4>
                                    <span>10.0000.0000 đ</span>
                                </div>
                                <div>
                                    <span className="text-[12px]">x&nbsp;</span>
                                    <span className="font-semibold text-[16px]">
                                        1
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
