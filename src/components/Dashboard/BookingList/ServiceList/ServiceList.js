import React from "react";
import "./ServiceList.css";
import service1 from "../../../../img/service1.png";
import service2 from "../../../../img/service2.png";
import ServiceListCard from "../BookingListCard/BookingListCard";

const serviceDetails = [
  {
    id: 1,
    title: "Office Interior Design",
    img: service1,
    status: "Pending",
  },
  {
    id: 1,
    title: "Showroom Design",
    img: service2,
    status: "Done",
  },
];

const ServiceList = () => {
  return (
    <div>
      <div className="container-fluid">
        {serviceDetails.map((service) => (
          <ServiceListCard service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
