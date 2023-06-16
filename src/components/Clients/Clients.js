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
    <div className="relative mb-32">
      <div>
        <img src={image} alt="photos" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 md:left-24 top-32">
        <p className="text-2xl mb-6">FOR CONTRACTORS</p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-10 md:left-24 top-52">
        <h2 className="mb-3 text-2xl lg:text-5xl font-semibold text-[#FFFFFF]">
        Find talent <br /> your way 
        </h2>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-10 md:left-24 top-80">
        <p className="text-xl text-white hidden lg:block">
          Whether just starting out or looking to improve or grow your business, our expert advice can help you on the road to success.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-10 md:left-24 md:top-3/4 top-3/4">
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
