import React from "react"
import Card from "../Card";

function Body (){
    return (
      <div>
        <h1 className="text-center my-3">
          <u>Services</u>
        </h1>
        <div className="row">
          <div className="col-sm-6">
            <Card
              img="img/diego-ph-BCuxVP5WEsU-unsplash.jpg"
              title="Anything"
              text="Text"
              link="Home"
            />
          </div>
          <div className="col-sm-6">
            <Card
              img="img/diego-ph-BCuxVP5WEsU-unsplash.jpg"
              title="Anything"
              text="Text"
              link="Home"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Card
              img="img/diego-ph-BCuxVP5WEsU-unsplash.jpg"
              title="Anything"
              text="Text"
              link="Home"
            />
          </div>
          <div className="col-sm-6">
            <Card
              img="img/diego-ph-BCuxVP5WEsU-unsplash.jpg"
              title="Anything"
              text="Text"
              link="Home"
            />
          </div>
        </div>
      </div>
    );
};

export default Body;