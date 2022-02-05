import React from "react";
import "./style.css";
const List = (props) => {
  const { user } = props;
  return (
    <div className="person">
      <img src={`${user.picture.medium}`} alt="img" />
      <div className="">
        <h4>{user.name.first + " " + user.name.last}</h4>
        <p>{user.dob.age} years</p>
      </div>
    </div>
  );
};

export default List;
