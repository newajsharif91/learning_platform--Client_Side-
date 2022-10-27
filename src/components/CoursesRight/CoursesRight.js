import React from "react";
import { FaStar, IconName } from "react-icons/fa";


const CoursesRight = ({ course }) => {
  const { name, url, title, ratings, price } = course;
  return (
    <div>
      <div className="rounded-xl w-94 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] rounded-t-xl" src={url} alt="Shoes" />
        </figure>

        <div className="card-body my-3">
          <div className="flex justify-between">
            <span className="card-title text-2xl font-bold">{name}</span>
            <span className="font-bold text-2xl">{price}</span>
          </div>

          <p className="h-14">{title}</p>
          <p className="text-lg flex">{ratings} <span className="ml-2 text-yellow-500 pt-1"><FaStar></FaStar></span> </p>
                  </div>
      </div>
    </div>
  );
};

export default CoursesRight;
