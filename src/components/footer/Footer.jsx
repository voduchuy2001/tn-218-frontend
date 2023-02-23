import React from 'react'

const Footer = () => {
  return (
    <footer className="pt-4 border-solid border-primary-color border-t-4">
      <div className="grids wide pb-4">
        <div className="row tablet:p-[0_16px] mobile:p-[0_16px]">
          <div className="col l-4 md-6 c-6 mb-5">
            <p className="font-semibold text-[16px] pb-2 uppercase">
              Chăm sóc khách hàng
            </p>
            <ul className="text-[12px] text-[#737373]">
              <li className="hover:text-primary-color hover:cursor-pointer">
                Trung Tâm Trợ Giúp
              </li>
              <li className="hover:text-primary-color hover:cursor-pointer">
                Sản phẩm
              </li>
              <li className="hover:text-primary-color hover:cursor-pointer">
                Hướng Dẫn Mua Hàng
              </li>
            </ul>
          </div>
          <div className="col l-4 md-6 c-6 mb-5">
            <p className="font-semibold text-[16px] pb-2 uppercase">
              Giới thiệu
            </p>
            <ul className="text-[12px] text-[#737373]">
              <li className="hover:text-primary-color hover:cursor-pointer">
                Trung Tâm Trợ Giúp
              </li>
              <li className="hover:text-primary-color hover:cursor-pointer">
                Cửa Hàng
              </li>
              <li className="hover:text-primary-color hover:cursor-pointer">
                Hướng Dẫn Mua Hàng
              </li>
            </ul>
          </div>
          <div className="col l-4 md-6 c-6 mb-5">
            <p className="font-semibold text-[16px] pb-2 uppercase">Danh mục</p>
            <ul className="text-[12px] text-[#737373]">
              <li className="hover:text-primary-color hover:cursor-pointer">
                Apple
              </li>
              <li className="hover:text-primary-color hover:cursor-pointer">
                Samsung
              </li>
              <li className="hover:text-primary-color hover:cursor-pointer">
                Xiaomi
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-10 bg-[#f5f5f5]">
        <p className="leading-[40px] text-center text-[#737373] text-[12px]">
          2023 - Bản quyền thuộc về TN218 - THUD - K45
        </p>
      </div>
    </footer>
  );
}

export default Footer