import React from "react";
import { useMemo, useEffect } from "react";

const listOfItems = Array(4)
  .fill(1)
  .map((_, idx) => {
    if (idx % 2) {
      return {
        name: "Im hidden",
        status: "blocked",
      };
    }
    return {
      name: "See me",
      status: "active",
    };
  });

const Task7 = (props) => {
  const [status, setStatus] = React.useState("active"); // active | blocked
  let r = () => status === "active" ? "active" : "blocked"

  let myVisibleElements = listOfItems;

  myVisibleElements = useMemo(() => {
    return listOfItems.filter((i) => (i.status === r()));
  }, [status]);

  const toggleStatus = () => {
    setStatus(status === 'active' ? 'block' : 'active')
  }

  return (
    <div>
      <button onClick={toggleStatus}>button</button>
      {myVisibleElements.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))}
    </div>
  );
};

export default Task7;
