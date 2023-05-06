import React from "react";

type PersonsListProps = {
  names: {
    first: string;
    last: string;
  }[]; // since we passing array if objects as props so we have to put these square braquets
};

const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
