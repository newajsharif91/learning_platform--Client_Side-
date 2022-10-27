import React from 'react';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
      <div>
        <div className="lg:flex mt-32 w-11/12 mx-auto">
          <div className="w-7/12" data-aos="fade-up" data-aos-duration="3000">
            <h1 className="text-5xl font-semibold text-white">
              These monitoring and evaluation
              <p className="text-orange-600 font-bold my-2">
                practices can help boost the impact of online education.
              </p>{" "}
            </h1>
          </div>

          <div className="mx-auto shadow-lg " data-aos="zoom-in-up">
            <img
              src={
                "https://www.bahamianstudio.com/wp-content/uploads/2020/08/team-designers-working-computer-gif-the-bahamian-studio-branding-graphic-design-flyers-logos-printing-marketing-nassau-bahamas.gif"
              }
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Home;