import React from "react";

const ProductDetail = () => {
    return (
        <div className="min-h-screen mb-5 mx-5">
            <div className="grids wide">
                <h1 className="font-bold p-[12px_0_8px_0] border-b-[1px] border-[#ece9e9] border-solid">
                    iPhone 14 Pro Max 128GB | Chính hãng VN/A
                </h1>
                <div className="row mt-3">
                    <div className="col l-4 md-4 c-12">
                        <section className="border-[1px] border-solid border-[#ccc] splide h-[376px] mb-3">
                            <img
                                className="tablet:h-[400px]  mobile:h-[300px] h-full w-[100%] object-contain"
                                src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-2_2.jpg"
                                alt=""
                            />
                        </section>
                    </div>
                    <div className="col l-4 md-8 c-12">
                        <h1 className="my-1 font-bold text-blue-500">
                            34.190.000 ₫
                        </h1>
                        {/* ROM Options */}
                        <div className="row sm-gutter">
                            <div className="col l-4 mb-2 md-4 c-6">
                                <div className="rom-item hover:cursor-pointer border-item--active text-center rounded-lg p-1 text-[12px] font-semibold">
                                    <h3>1TB</h3>
                                    <span>38.990.000 đ</span>
                                </div>
                            </div>
                            <div className="col l-4 mb-2 md-4 c-6">
                                <div className="rom-item hover:cursor-pointer text-center border-item rounded-lg p-1 text-[12px] font-semibold">
                                    <h3>1TB</h3>
                                    <span>38.990.000 đ</span>
                                </div>
                            </div>
                            <div className="col l-4 mb-2 md-4 c-6">
                                <div className="rom-item hover:cursor-pointer text-center border-item rounded-lg p-1 text-[12px] font-semibold">
                                    <h3>1TB</h3>
                                    <span>38.990.000 đ</span>
                                </div>
                            </div>
                            <div className="col l-4 mb-2 md-4 c-6">
                                <div className="rom-item hover:cursor-pointer text-center border-item rounded-lg p-1 text-[12px] font-semibold">
                                    <h3>1TB</h3>
                                    <span>38.990.000 đ</span>
                                </div>
                            </div>
                        </div>
                        {/* Color Options */}
                        <div>
                            <h2 className="font-semibold my-1">
                                Chọn màu để xem giá và chi nhánh có hàng
                            </h2>
                            <div className="row sm-gutter">
                                <div className="col l-4 md-4 c-6 mb-2 hover:cursor-pointer">
                                    <div className="color-item flex border-item--active text-center rounded-lg p-1 text-[12px] font-semibold">
                                        <img
                                            className="p-1 w-[30px] h-[30px]"
                                            src="https://cdn2.cellphones.com.vn/35x/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_pure_back_iphone_13_pro_max_alpine_green_pure_front_2-up_screen__usen.png"
                                            alt=""
                                        />
                                        <div>
                                            <h3>Xanh lá</h3>
                                            <span>38.990.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 md-4 c-6 mb-2 hover:cursor-pointer">
                                    <div className="color-item flex text-center border-item rounded-lg p-1 text-[12px] font-semibold">
                                        <img
                                            className="p-1 w-[30px] h-[30px]"
                                            src="https://cdn2.cellphones.com.vn/35x/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_pure_back_iphone_13_pro_max_alpine_green_pure_front_2-up_screen__usen.png"
                                            alt=""
                                        />
                                        <div>
                                            <h3>Xanh lá</h3>
                                            <span>38.990.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 md-4 c-6 mb-2 hover:cursor-pointer">
                                    <div className="color-item flex text-center border-item rounded-lg p-1 text-[12px] font-semibold">
                                        <img
                                            className="p-1 w-[30px] h-[30px]"
                                            src="https://cdn2.cellphones.com.vn/35x/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_pure_back_iphone_13_pro_max_alpine_green_pure_front_2-up_screen__usen.png"
                                            alt="abc"
                                        />
                                        <div>
                                            <h3>Xanh lá</h3>
                                            <span>38.990.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 md-4 c-6 mb-2 hover:cursor-pointer">
                                    <div className="color-item flex text-center border-item rounded-lg p-1 text-[12px] font-semibold">
                                        <img
                                            className="p-1 w-[30px] h-[30px]"
                                            src="https://cdn2.cellphones.com.vn/35x/media/catalog/product/i/p/iphone_13_pro_max_alpine_green_pure_back_iphone_13_pro_max_alpine_green_pure_front_2-up_screen__usen.png"
                                            alt="abc"
                                        />
                                        <div>
                                            <h3>Xanh lá</h3>
                                            <span>38.990.000 đ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Buy btn and add to cart btn */}
                        <div className="row sm-gutter">
                            <div className="col l-8 md-8 c-8">
                                <button className="btn-primary w-full h-[50px]">
                                    MUA NGAY
                                </button>
                            </div>
                            <div className="col l-4 md-4 c-4">
                                <button className="h-[50px] w-full text-blue-500 border-2 border-solid border-blue-500 p-1 rounded-lg">
                                    <i className="fas fa-cart-plus" />
                                    <span className="block text-[12px]">
                                        Thêm vào giỏ
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 md-0 c-0">
                        <div className="border-[1px] border-solid border-[#d1d5db] text-center p-2">
                            <h3 className="font-bold text-[16px] leading-[24px] p-3 uppercase">
                                Chúng tôi luôn sẵn sàng <br />
                                để giúp đỡ bạn
                            </h3>
                            <img
                                className="w-full px-2 object-contain h-[220px]"
                                src="./img/others/support_online.png"
                                alt=""
                            />
                            <span className="text-[#7a7d8d]">
                                Để được hỗ trợ tốt nhất hãy gọi
                            </span>
                            <span>
                                <h2 className="hover:text-blue-500 font-bold text-[20px]">
                                    01234 567 89
                                </h2>
                            </span>
                            <span className="bg-white inline-block px-2">
                                Hoặc
                            </span>
                            <p className="font-bold text-[#7a7d8d]">
                                Chat hỗ trợ trực tuyến
                            </p>
                            <p className="text-[#7a7d8d]">
                                Chúng tôi luôn trực tuyến 24/7
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-8">
                    <div className="col l-8 md-12 c-12">
                        {/* Ở chỗ này khi tạo đường viền nên xài sudoclass để se bg-color sẽ tiện hơn */}
                        <div className="border-b-[2px] border-solid border-b-[#eae9ef] ">
                            <span
                                className="hover:cursor-pointer feedback introdution p-[3px_12px_4px_12px] font-semibold text-[#aaa] relative hover:text-black after:w-full  hover:after:bg-black uppercase after:bg-[#eae9ef] after:content-[''] after:h-[1px] 
                      after:bottom-0 after:left-0 after:absolute
                       "
                            >
                                Mô tả
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quia esse ab consectetur
                                quaerat vero. Vel ratione repellendus doloremque
                                beatae quae aliquam tempora, iure dignissimos
                                iste perferendis voluptate quas. Modi harum
                                corrupti nostrum asperiores odit molestias
                                provident, dolor repellendus amet aut quasi ea,
                                eveniet delectus fugit ratione praesentium
                                accusamus minus eos ab quo impedit aliquid autem
                                commodi quis. Amet veritatis porro officia
                                incidunt ipsum in illo ex sapiente modi quaerat
                                ut, accusantium natus eum ratione nisi
                                necessitatibus, vitae molestias ipsa ducimus
                                reprehenderit nobis accusamus? Velit in
                                perspiciatis voluptate aut corporis quod esse
                                non veritatis sed sapiente ratione eveniet
                                debitis, culpa atque!
                            </p>
                        </div>
                        <div id="product_info" className="relative m-3 hidden">
                            <div
                                className="h-[768px] overflow-hidden"
                                id="product_info-content"
                            >
                                <h3
                                    style={{
                                        boxSizing: "border-box",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                        fontWeight: 500,
                                        fontStretch: "normal",
                                        fontSize: 20,
                                        lineHeight: 28,
                                        fontFamily:
                                            "Arial, Helvetica, sans-serif",
                                        color: "#333333",
                                        margin: "20px 0px 15px",
                                        backgroundColor: "#ffffff",
                                        padding: 0,
                                        outline: "none",
                                    }}
                                >
                                    Thiết kế đặc trưng với màu sắc thời thượng
                                </h3>
                                <div
                                    className="parameter-item"
                                    style={{
                                        boxSizing: "border-box",
                                        fontSize: 14,
                                        textAlign: "start",
                                        margin: 0,
                                        padding: "0px 30px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        iPhone 13 Pro không có nhiều sự thay đổi
                                        về thiết kế, khi máy vẫn sở hữu kiểu
                                        dáng tương tự như&nbsp;
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                            }}
                                            title="Tham khảo giá điện thoại iPhone 12 Pro chính hãng"
                                        >
                                            iPhone 12 Pro
                                        </span>
                                        &nbsp;với các cạnh viền vuông vắn và hai
                                        mặt kính cường lực cao cấp. Sở hữu 4
                                        phiên bản màu gồm xanh dương, bạc, vàng
                                        đồng và xám cho bạn tùy chọn theo sở
                                        thích của mình.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" ls-is-cached lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Sở hữu 4 phiên bản màu sắc trẻ trung - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-1.jpg"
                                                alt="Sở hữu 4 phiên bản màu sắc trẻ trung - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-1.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Máy đạt tiêu chuẩn&nbsp;
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                            }}
                                            title="Tham khảo điện thoại chống nước bụi tại Thế Giới Di Động"
                                        >
                                            kháng nước và bụi
                                        </span>
                                        &nbsp;IP68 có khả năng chống lại một số
                                        hạt bụi, và được bảo vệ khi rơi xuống
                                        nước ở độ sâu đến 6 mét trong 30
                                        phút&nbsp;theo chuẩn IEC 60529, thoải
                                        mái nhắn tin khi lỡ ra ngoài gặp mưa,
                                        chụp ảnh tự tin khi đi hồ bơi, bãi
                                        biển,...
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" ls-is-cached lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Khả năng kháng bụi, nước - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-2.jpg"
                                                alt="Khả năng kháng bụi, nước - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-2.jpg"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <h3
                                    style={{
                                        boxSizing: "border-box",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                        fontWeight: 500,
                                        fontStretch: "normal",
                                        fontSize: 20,
                                        lineHeight: 28,
                                        fontFamily:
                                            "Arial, Helvetica, sans-serif",
                                        color: "#333333",
                                        margin: "20px 0px 15px",
                                        backgroundColor: "#ffffff",
                                        padding: 0,
                                        outline: "none",
                                    }}
                                >
                                    Nâng cấp màn hình với tần số quét 120 Hz
                                </h3>
                                <div
                                    className="parameter-item"
                                    style={{
                                        boxSizing: "border-box",
                                        fontSize: 14,
                                        textAlign: "start",
                                        margin: 0,
                                        padding: "0px 30px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Chiếc iPhone 13 Pro vẫn được trang bị
                                        màn hình kích thước 6.1 inch, với phần
                                        tai thỏ được làm nhỏ hơn giúp hiển thị
                                        thêm nhiều thông tin cũng như tăng cường
                                        cảm giác trải nghiệm. Bề mặt có lớp phủ
                                        oleophobic chống bám vân tay, giữ cho
                                        màn hình luôn được sạch mới.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Trang bị màn hình 6.1 inch - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-man-hinh.jpg"
                                                alt="Trang bị màn hình 6.1 inch - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-man-hinh.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        iPhone 13 Pro đã được nâng cấp lên tần
                                        số quét 120 Hz, với ProMotion có thể làm
                                        mới từ 10 đến 120 khung hình/giây. Với
                                        tần số quét cao, mọi thao tác chuyển
                                        cảnh khi lướt ngón tay trên màn hình trở
                                        nên mượt mà hơn đồng thời hiệu ứng thị
                                        giác khi chúng ta dùng&nbsp;
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                            }}
                                            title="Tham khảo các mẫu điện thoại chơi game tại Thế Giới Di Động"
                                        >
                                            điện thoại chơi game
                                        </span>
                                        &nbsp;hoặc xem video cũng cực kỳ mãn
                                        nhãn.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Chuyển động mượt mà nhờ tần số 120 Hz - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-5.jpg"
                                                alt="Chuyển động mượt mà nhờ tần số 120 Hz - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-5.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Tốc độ làm tươi tự động tăng lên để hiển
                                        thị hiệu suất đồ họa, tự động giảm xuống
                                        khi không sử dụng để tiết kiệm năng
                                        lượng và tốc độ làm mới cũng được tự
                                        tinh chỉnh linh động để phù hợp hơn tốc
                                        độ lướt của ngón tay bạn.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Tốc độ làm tươi được tự động hóa - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-4.jpg"
                                                alt="Tốc độ làm tươi được tự động hóa - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-4.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Sử dụng tấm nền OLED có số điểm ảnh lên
                                        đến 1170 x 2532 Pixels, độ sáng điển
                                        hình 1000 nits, khi hiển thị video HDR
                                        1200 nits, tăng lên 25% khi đặt dưới ánh
                                        mặt trời, sắc đen hiển thị sâu, sắc sáng
                                        tươi tắn, khung hình sinh động như
                                        thực.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Độ sáng đạt 1200 nits - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-6.jpg"
                                                alt="Độ sáng đạt 1200 nits - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-6.jpg"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <h3
                                    style={{
                                        boxSizing: "border-box",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                        fontWeight: 500,
                                        fontStretch: "normal",
                                        fontSize: 20,
                                        lineHeight: 28,
                                        fontFamily:
                                            "Arial, Helvetica, sans-serif",
                                        color: "#333333",
                                        margin: "20px 0px 15px",
                                        backgroundColor: "#ffffff",
                                        padding: 0,
                                        outline: "none",
                                    }}
                                >
                                    Quay chụp đỉnh cao với camera Pro
                                </h3>
                                <div
                                    className="parameter-item"
                                    style={{
                                        boxSizing: "border-box",
                                        fontSize: 14,
                                        textAlign: "start",
                                        margin: 0,
                                        padding: "0px 30px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        iPhone 13 Pro có bộ camera 3 ống kính 12
                                        MP xếp xen kẽ thành một cụm vuông, đặt ở
                                        góc trên bên trái của lưng máy gồm
                                        camera tele, camera góc siêu rộng
                                        (Ultra&nbsp;Wide) khẩu độ f/1.8, góc
                                        nhìn đến 120 độ và camera chính góc rộng
                                        (Wide) với khẩu độ f/1.5.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className="lazyload"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    opacity: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Bộ ba ống kính chuyên nghiệp - iPhone 13 Pro 128GB"
                                                alt="Bộ ba ống kính chuyên nghiệp - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-7.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Camera Ultra Wide được làm mới có thể
                                        lấy nét tự động trong khoảng cách 2 cm,
                                        giúp phóng to hình ảnh của giọt sương,
                                        lông chim, cát vàng,... tạo nên những
                                        tuyệt tác nghệ thuật chỉ bằng một thao
                                        tác chụp đơn giản. Camera này cũng cho
                                        khả năng quay cảnh chuyển động tua nhanh
                                        thời gian hoặc chuyển động chậm linh
                                        hoạt để bạn làm video giải trí cực
                                        đẹp.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className="lazyload"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    opacity: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Camera Ultra Wide lấy nét cực ấn tượng - iPhone 13 Pro 128GB"
                                                alt="Camera Ultra Wide lấy nét cực ấn tượng - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-8.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Apple gọi iPhone 13 Pro là thiết bị được
                                        tạo ra cho ánh sáng yếu, bởi hệ thống
                                        camera được hỗ trợ chế độ ban đêm Night
                                        Mode, trang bị&nbsp;máy quét LiDAR (khả
                                        dụng cho chế độ chụp chân dung ban đêm),
                                        camera Wide nâng cao độ sáng đến 2.2
                                        lần, camera Ultra Wide tăng 92% độ sáng
                                        cho phép quay chụp lại các hình ảnh,
                                        thước phim ban đêm cực kỳ chi tiết, sắc
                                        nét.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className="lazyload"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    opacity: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Chế độ đêm Night Mode - iPhone 13 Pro 128GB"
                                                alt="Chế độ đêm Night Mode - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-9.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Hệ thống camera zoom quang học 6x, riêng
                                        camera&nbsp;telephoto có thể zoom quang
                                        3x rất tuyệt khi chụp ảnh và quay video
                                        ở xa. Kết hợp nhiều tùy chọn hiệu ứng
                                        bokeh và các hiệu ứng ánh sáng chất
                                        lượng để bạn tạo nên những bức ảnh lung
                                        linh như nhiếp ảnh gia chuyên
                                        nghiệp.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className="lazyload"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    opacity: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Ảnh chụp trên camera - iPhone 13 Pro 128GB"
                                                alt="Ảnh chụp trên camera - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-10.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Một chế độ nổi bật khác hỗ trợ trên
                                        camera Pro này là chế độ&nbsp;điện ảnh
                                        Cinematic cho phép quay&nbsp;với độ sâu
                                        trường ảnh nông, tự động thêm các chuyển
                                        đổi lấy nét giữa các đối tượng, đoán
                                        trước chủ thể mới vào khung hình và đưa
                                        họ vào tiêu điểm, đổi tiêu điểm, chỉnh
                                        hiệu ứng&nbsp;bokeh dễ dàng kể cả sau
                                        khi quay.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className="lazyload"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    opacity: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Chế độ điện ảnh độc đáo - iPhone 13 Pro 128GB"
                                                alt="Chế độ điện ảnh độc đáo - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-11.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Có chế độ chụp phong cảnh Photographic
                                        Styles dễ dàng điều chỉnh độ ấm, tông
                                        màu phù hợp với ý tưởng chụp của bạn,
                                        tuy vậy khác với các bộ lọc thông
                                        thường, với chế độ này các chi tiết như
                                        bầu trời, màu da sẽ được giữ lại độ chân
                                        thật, tự nhiên nhất có thể.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Chế độ chụp phong cảnh Photographic Styles - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-12.jpg"
                                                alt="Chế độ chụp phong cảnh Photographic Styles - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-12.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Ở mặt trước điện thoại có camera
                                        TrueDepth độ phân giải&nbsp;12 MP cho
                                        bạn tự selfie tuyệt đẹp, đi kèm nhiều
                                        chế độ chụp tiện ích như chế độ chân
                                        dung tích hợp hiệu ứng bokeh nâng cao và
                                        kiểm soát độ sâu&nbsp;mạnh mẽ, thêm
                                        Animoji và Memoji, chế độ Night
                                        Mode,&nbsp;Burst,&nbsp;Cinematic,...
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Camera TrueDepth - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-13.jpg"
                                                alt="Camera TrueDepth - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-13.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Hơn nữa, camera TrueDepth và
                                        chip&nbsp;A15 Bionic hỗ trợ Face ID để
                                        xác minh khuôn mặt, giúp mở máy nhanh và
                                        an toàn hơn.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Cả camera trước và sau đều quay được
                                        video&nbsp;HDR hỗ trợ Dolby Vision đạt
                                        chuẩn chất lượng lên đến 4K với tốc độ
                                        khung hình 60&nbsp;fps, quay
                                        video&nbsp;ProRes lên đến 1080p ở tốc độ
                                        30&nbsp;fps,&nbsp;cùng nhiều chế độ quay
                                        khác giúp bạn có nhiều sự thay đổi khác
                                        nhau khi quay.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Hỗ trợ quay video đạt chất lượng 4K - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-14.jpg"
                                                alt="Hỗ trợ quay video đạt chất lượng 4K - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-14.jpg"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <h3
                                    style={{
                                        boxSizing: "border-box",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                        fontWeight: 500,
                                        fontStretch: "normal",
                                        fontSize: 20,
                                        lineHeight: 28,
                                        fontFamily:
                                            "Arial, Helvetica, sans-serif",
                                        color: "#333333",
                                        margin: "20px 0px 15px",
                                        backgroundColor: "#ffffff",
                                        padding: 0,
                                        outline: "none",
                                    }}
                                >
                                    Hiệu năng đột phá với Apple A15 Bionic
                                </h3>
                                <div
                                    className="parameter-item"
                                    style={{
                                        boxSizing: "border-box",
                                        fontSize: 14,
                                        textAlign: "start",
                                        margin: 0,
                                        padding: "0px 30px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        iPhone 13 Pro được trang bị bộ vi xử lý
                                        Apple A15 Bionic, sản xuất trên tiến
                                        trình 5 nm cải tiến, theo Apple công bố
                                        thì đây&nbsp;là chipset nhanh nhất trong
                                        thế giới smartphone tại thời điểm
                                        09/2021.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Vi xử lý Apple A15 Bionic - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-15.jpg"
                                                alt="Vi xử lý Apple A15 Bionic - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-15.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Tích hợp chip đồ họa GPU 5 lõi hiệu suất
                                        tăng lên 50%,&nbsp;CPU đáp ứng đa dạng
                                        tác vụ, nâng cao tuổi thọ pin. Đặc biệt,
                                        công nghệ trí tuệ nhân tạo Neural Engine
                                        tăng tốc các tác vụ máy học, thực hiện
                                        được đến 15.8 nghìn tỷ hoạt động mỗi
                                        giây, cho quá trình sử dụng thiết bị
                                        mượt mà, ổn định.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Đồ họa mượt mà - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-16.jpg"
                                                alt="Đồ họa mượt mà - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-16.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Máy sở hữu con&nbsp;
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                            }}
                                            title="Tham khảo điện thoại có RAM 6 GB tại Thegioididong.com"
                                        >
                                            RAM 6 GB
                                        </span>
                                        ,&nbsp;
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                            }}
                                            title="Tham khảo điện thoại có ROM 128 GB tại Thegioididong.com"
                                        >
                                            bộ nhớ trong 128 GB
                                        </span>
                                        , vừa đủ với nhu cầu sử dụng của một
                                        người dùng cơ bản không có nhu cầu quay
                                        video quá nhiều, máy cũng có thêm phiên
                                        bản bộ nhớ trong lên đến&nbsp;
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                            }}
                                            title="Tham khảo iPhone 13 Pro 1 TB tại Thegioididong.com"
                                        >
                                            iPhone 13 Pro 1 TB
                                        </span>
                                        , bạn có thể cân nhắc nếu có nhu cầu lưu
                                        trữ cao.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Dung lượng bộ nhớ - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-17.jpg"
                                                alt="Dung lượng bộ nhớ - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-17.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Ngoài ra, máy còn được hỗ trợ mạng di
                                        động 5G&nbsp;chất lượng cao, có khả năng
                                        phản hồi tức thì, việc tải xem, xem phim
                                        4K,... sẽ vô cùng nhanh chóng, đưa trải
                                        nghiệm internet của người dùng lên tầm
                                        cao mới.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Hỗ trợ kết nối 5G - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-2021-pro-01.jpg"
                                                alt="Hỗ trợ kết nối 5G - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-2021-pro-01.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Thiết bị được cài đặt nền tảng iOS 15
                                        cho bạn vừa giao tiếp qua FaceTime vừa
                                        chia sẻ bài hát, tài liệu với mọi người
                                        tiện lợi, dễ dàng tương tác với văn bản
                                        trong hình ảnh để gửi email, nhận chỉ
                                        đường, thực hiện cuộc gọi,...&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Nền tảng IOS 15 - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-18.jpg"
                                                alt="Nền tảng IOS 15 - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-18.jpg"
                                            />
                                        </span>
                                    </p>
                                </div>
                                <h3
                                    style={{
                                        boxSizing: "border-box",
                                        fontVariantNumeric: "normal",
                                        fontVariantEastAsian: "normal",
                                        fontWeight: 500,
                                        fontStretch: "normal",
                                        fontSize: 20,
                                        lineHeight: 28,
                                        fontFamily:
                                            "Arial, Helvetica, sans-serif",
                                        color: "#333333",
                                        margin: "20px 0px 15px",
                                        backgroundColor: "#ffffff",
                                        padding: 0,
                                        outline: "none",
                                    }}
                                >
                                    Nâng cấp thời lượng pin
                                </h3>
                                <div
                                    className="parameter-item"
                                    style={{
                                        boxSizing: "border-box",
                                        fontSize: 14,
                                        textAlign: "start",
                                        margin: 0,
                                        padding: "0px 30px",
                                    }}
                                >
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        iPhone 13 Pro sẽ có thời lượng pin sử
                                        dụng tốt hơn 1.5 tiếng khi so với iPhone
                                        12 Pro, máy có thể phát video liên tục
                                        trong 22 tiếng, nghe nhạc trong 75 tiếng
                                        và hỗ trợ sạc nhanh 20 W qua cáp.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Tối ưu hóa năng lượng - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-19.jpg"
                                                alt="Tối ưu hóa năng lượng - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-19.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Lưu ý: Củ sạc 20 W sẽ không đi kèm trong
                                        hộp khi mua máy.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Ngoài ra còn hỗ trợ sạc không dây chuẩn
                                        Qi 7.5 W, sạc không dây&nbsp;MagSafe 15
                                        W bạn có thể lựa chọn phương pháp sạc
                                        phù hợp và tiện lợi nhất trong quá trình
                                        sử dụng.
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            className="preventdefault"
                                            style={{
                                                boxSizing: "border-box",
                                                backgroundColor: "transparent",
                                                color: "#2f80ed",
                                                textDecorationLine: "none",
                                                margin: 0,
                                                padding: 0,
                                                transition: "all 0.2s ease 0s",
                                                cursor: "default",
                                            }}
                                        >
                                            <img
                                                className=" lazyloaded"
                                                style={{
                                                    boxSizing: "border-box",
                                                    border: 0,
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    objectFit: "cover",
                                                    margin: "20px auto",
                                                    padding: 0,
                                                    display: "block",
                                                    height: "auto !important",
                                                }}
                                                title="Sạc không dây với MagSafe - iPhone 13 Pro 128GB"
                                                src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-20.jpg"
                                                alt="Sạc không dây với MagSafe - iPhone 13 Pro 128GB"
                                                data-src="https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-20.jpg"
                                            />
                                        </span>
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        Dung lượng pin trên iPhone luôn thấp hơn
                                        khi so với các dòng máy Android nhưng
                                        việc trang bị chipset mới cùng sự tối ưu
                                        hoá của hệ điều hành sẽ đảm bảo thời
                                        lượng sử dụng không hề thua kém trên sản
                                        phẩm Android, thậm chí còn có thể vượt
                                        trội hơn.&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            boxSizing: "border-box",
                                            margin: "0px 0px 10px",
                                            padding: 0,
                                            marginBlock: 0,
                                            textRendering: "geometricprecision",
                                            lineHeight: "1.5",
                                            fontSize: "16px !important",
                                        }}
                                    >
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                margin: 0,
                                                padding: 0,
                                                textAlign: "justify",
                                            }}
                                        >
                                            iPhone 13 Pro với thiết kế cứng cáp,
                                            sang trọng cùng khả năng nhiếp ảnh
                                            ấn tượng, sẽ là một sản phẩm phục vụ
                                            tốt các nhu cầu của bạn cũng như là
                                            một món đồ thời trang hiện đại.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="text-center bg-white h-[24px] w-full">
                                <span className="text-blue-700 hover:underline loadmore leading-[24px]">
                                    Xem thêm{" "}
                                    <i className="fas fa-chevron-down" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 md-12 c-12">
                        <div className="mb-3 border-b-[2px] border-solid border-b-[#eae9ef] text-center">
                            <span className="p-[3px_12px_4px_12px] uppercase font-semibold text-[#aaa] ">
                                Thông số kỹ thuật
                            </span>
                        </div>
                        {/* specifications */}
                        <div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        Màn hình:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        OLED6.1"Super Retina XDR
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        Camera trước:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        12MP
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        Camera sau:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        3 camera 12MP
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        Ram:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        6GB
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        Bộ nhớ trong:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        128GB
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        CPU:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        Apple A15 Bionic
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        GPU:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        Tiêu Chuẩn
                                    </h3>
                                </div>
                            </div>
                            <div className="row p-1">
                                <div className="col l-6">
                                    <span className="font-semibold text-[16px]">
                                        Dung Lượng Pin:
                                    </span>
                                </div>
                                <div className="col l-6">
                                    <h3 className="text-[16px] text-[#7a7d8d]">
                                        3095 mAh20 W
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
