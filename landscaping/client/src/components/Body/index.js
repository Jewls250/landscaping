import React from "react"
import Card from "../Card";
import "./style.css";

function Body (){
    return (
      <div className="">
        <div className="backgroundImg">
          <h1 className="text-center  centering text-white outline">
            S And S Power Washing And Lawn Maintenance
          </h1>
        </div>
        <div className="seviceImg  text-center">
          <h1 className="text-center py-4 text-white outline">
            <u>Services</u>
          </h1>
          <div className="row">
            <div className="col-sm-6">
              <Card img="" title="Lawn Maintenance" />
            </div>
            <div className="col-sm-6">
              <Card img="" title="Debri Clean Up" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Card img="" title="Glass Cleaning" />
            </div>
            <div className="col-sm-6">
              <Card img="" title="Planting" />
            </div>
            <div className="col-sm-6">
              <Card img="" title="Power Washing" />
            </div>
            <div className="col-sm-6">
              <Card img="" title="Trimming" />
            </div>
          </div>
        </div>
        <div className="backgroundImg">
          <h1 className="text-center py-4  text-white outline">
            <u>About Us</u>
          </h1>
          <section className="text-center text-white ">
            <h3 className="outline2">
              Our mission is to procide only the best power washing and
              landscaping services to anyone in need to create or maintain your
              outside living environment. We realize your landscape is a place
              that provides pleasure andseclusion from the world and that you
              have put your trust in our company to create ormaintain it as if
              you were doing it yourself. We consider you part of our family and
              know that you trust us with your yard.
            </h3>
          </section>
        </div>
        <div className="reviewImg">
          <h1 className="text-center p-4">
            <u>Reviews</u>
          </h1>
          <section></section>
        </div>
      </div>
    );
};

export default Body;