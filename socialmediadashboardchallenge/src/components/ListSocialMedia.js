import React from "react";
import "../App.scss";

export const Card = (props) => {
  const { infoAbout } = props;
  return (
    <div className="card" id="card-about">
        <img src={process.env.PUBLIC_URL + `../../images/${infoAbout.socialMedia}`} alt="s"/>
        <h5>{infoAbout.name}</h5>
        <h5>{infoAbout.numberFollowers}</h5>
        <h5>{infoAbout.followers}</h5>
        <p>{infoAbout.gainFollowers}</p>
    </div>
  );
};


export const ListSocialMedias = (props) => {
  const { data } = props;
  const aboutInformation = data[0];
  console.log(aboutInformation);

  return (
    <div className="container">
      <div className="row">
        {aboutInformation.map((infoAbout) => (
          <Card key={infoAbout.id} infoAbout={infoAbout} />
        ))}
      </div>
    </div>
  );
};
