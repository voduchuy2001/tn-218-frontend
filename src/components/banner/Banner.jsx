import React from "react";
import banner from "../../assets/images/banner-e-commerce1.png";

const Banner = () => {
    return (
        <div className="bg-slate-200 py-3 min-h-[348px]">
            <div className="grids wide">
                <div className="row">
                    {/* Slider */}
                    <aside className="col l-8 md-12 c-12">
                        <img className="h-[320px] w-full" src={banner} alt="" />
                    </aside>
                    {/* Posts */}
                    <aside className="col l-4 md-0 c-0">
                        <img
                            className="h-[320px] w-full"
                            src="https://aumejtoqen.cloudimg.io/v7/taggshop.io/blog/wp-content/uploads/2022/08/blog-banner-2-1.jpg"
                            alt=""
                        />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Banner;
