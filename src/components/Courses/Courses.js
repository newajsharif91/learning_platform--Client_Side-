import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CoursesRight from "../CoursesRight/CoursesRight";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://assigment-10.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="mt-20 text-white">
      <h1 className="text-center text-5xl font-bold font-sans mb-20 shadow-lg p-5">
        Our Courses
      </h1>

      <div className="lg:flex w-11/12 mx-auto">
        <div className="lg:w-2/6">
          <h3 className="text-3xl text-center lg:text-left font-bold mb-6">
            Course List
          </h3>

          {courses.map((course) => (
            <Link key={course.id} to={`/cartdetails/${course.id}`}>
              <div className="text-xl font-bold mt-2 shadow-md text-center lg:text-left py-2">
                {course.name}
              </div>
            </Link>
          ))}
        </div>

        <div className=" md:mt-20 lg:mt-0  w-full md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-10 sm:block mb-20 sm:p-0 md:p-1 mt-10 lg:px-14">
          {courses.map((course) => (
            <Link key={course.id} to={`/cartdetails/${course.id}`}>
              <CoursesRight key={course.id} course={course}></CoursesRight>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
