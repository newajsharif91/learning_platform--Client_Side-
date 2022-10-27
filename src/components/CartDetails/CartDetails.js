import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import DownloadPage from "../DownloadPage/DownloadPage";

const CartDetails = () => {

  const courseDetails = useLoaderData();
  const { url, price, title, details, author, name, ratings, students, id } =
    courseDetails;


  return (
    <div className="mt-20 ">
      <div className=" text-center text-5xl mb-10 shadow-xl p-4">
        <h1 className="mb-6">{title}</h1>
        <DownloadPage
          roofElementId="pageToDownload"
          downloadFileName={name}
        ></DownloadPage>
      </div>

      <div id="pageToDownload" className="mt-20">
        <div className="w-11/12 mx-auto">
          <div className="rounded-t-xl w-full card-body bg-base-100 shadow-xl">
            <h2 className="card-title text-5xl mb-10 font-bold mx-auto text-center">
              {name}
            </h2>

            <figure className="">
              <img className="mx-auto" src={url} alt="" />
            </figure>

            <div className="card-body items-center text-center">
              <p className="text-xl font-semibold">{details}</p>

              <div className="flex justify-between mt-5">
                <p className="flex font-bold mx-20">
                  <span>Ratings: {ratings}</span>{" "}
                  <span>
                    <FaStar></FaStar>
                  </span>
                </p>

                <p className="font-bold mx-20">{students}</p>
              </div>
              <p className="font-bold text-2xl mt-2">{author}</p>
              <span className="font-bold text-2xl">Price: {price}</span>

              <div className="card-actions">
                <button className="btn btn-primary mt-5">
                  <Link
                    kye={id}
                    to={`/checkout/${id}`}
                    >Go Premium</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartDetails;
