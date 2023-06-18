import React from "react";
import img1 from "../../assets/icons/star.png";
import img2 from "../../assets/icons/check-mark.png";
import img3 from "../../assets/icons/shield.png";
import TradeData from "../TradeData/TradeData";


const TradeBrittany = () => {
    // trades data array of objects
    const tradeDatas = [
        {
            image: img1,
            title: 'Proof of quality',
            details: 'Our impeccable track record and customer satisfaction serve as proof of our unwavering dedication to quality.'
        },
        {
            image: img2,
            title: 'Physical checks',
            details: 'Our commitment to quality is reinforced by rigorous physical checks. With 3 levels unverified, verified and reccomended.'
        },
        {
            image: img3,
            title: 'Safe and secure',
            details: ' Your safety and security are our top priorities. We implement robust measures to safeguard your personal information.'
        }
    ]

  return (
    <div className="lg:flex items-center h-[745px] mb-16 md:mb-24">
      <div className="p-6 lg:p-16 mt-0 lg:h-full lg:w-3/5 rounded-lg text-[#081D03] bg-[#F5F5F5]">
        {/* heading */}
        <h2 className="mb-3 text-3xl lg:text-5xl font-semibold">
        Why people turn to <br /> Find trade Brittany 
        </h2>
        {/* text trade data */}
        <div className="mt-5 lg:mt-10">
            {
                tradeDatas.map((tradeData, index) => <TradeData
                key={index}
                tradeData={tradeData}
                ></TradeData>)
            }
        </div>
      </div>
      <div className="p-12 lg:p-24 mt-0 lg:h-full lg:w-2/5 rounded-lg lg:ml-10  bg-[#4EA62F]">
        <p className="text-[#FFFFFF] lg:mt-40 text-2xl lg:text-4xl font-semibold">
            Connecting <br />
            Needs, <br />
            Empowering <br />
            Constractors <br />
            Together.
        </p>
      </div>
    </div>
  );
};

export default TradeBrittany;
