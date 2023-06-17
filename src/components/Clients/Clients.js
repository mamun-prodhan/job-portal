import React from "react";
import image from "../../assets/images/client.png";
import img2 from "../../assets/icons/arrow.png";
import Client from "../Client/Client";

const Clients = () => {

    const clients = [
        {
            title: "Post a job and hire a pro",
            image: img2
        },
        {
            title: "Find the best talents",
            image: img2
        },
        {
            title: "Save time Stress free",
            image: img2
        }
    ]

  return (
    <div className="relative mb-16 md:mb-24">
      <div>
        <img className="w-full rounded-xl object-cover h-72 md:h-96 lg:h-full" src={image} alt="photos" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-6 md:left-6 lg:left-16 top-1/4 md:top-16 lg:top-28">
        <p className="text-xl lg:text-2xl text-[#FFFFFF] mb-6">FOR CLIENTS</p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-36 md:-translate-y-1/2 left-6 md:left-6 lg:left-16 top-52 md:top-24 lg:top-52">
        <h2 className="mt-3 md:mt-6 lg:mt-0 md:mb-6 text-3xl w-80 md:w-80 lg:w-60 md:text-3xl lg:text-5xl font-semibold text-[#FFFFFF] leading-none">
        Find talent your way 
        </h2>
      </div>
      <div className="absolute flex justify-end transform -translate-y-44 md:-translate-y-44 lg:-translate-y-1/2 w-80 md:w-80 lg:w-2/5 left-6 md:left-6 lg:left-16 top-72">
        <p className="text-white md:text-xl md:mt-3 lg:mt-6">
          Whether just starting out or looking to improve or grow your business, our expert advice can help you on the road to success.
        </p>
      </div>
      <div className="absolute mt-5 md:mt-0 flex items-center transform -translate-y-1/2 w-5/6 left-6 md:left-6 lg:left-16 top-3/4 md:top-[80%]">
            {
                clients.map((client, index) => <Client
                key={index}
                client={client}
                ></Client>)
            }
      </div>
    </div>
  );
};

export default Clients;
