import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import classes from "./StoredAircraft.module.css";

const StoredAircraftLi = props => {
  const [classEnabled, setClassEnabled] = useState(false);

  return (
    <Paper
      className={classes.StoredInfo}
      onClick={() => setClassEnabled(!classEnabled)}
      style={classEnabled ? { textDecoration: "line-through" } : {}}
    >
      <p>
        Tail Number: <strong>{props.tailNumber}</strong>
        <br />
        Fuel Remaining (A/C Gauges): <strong>{props.fuelRem}Kg</strong> <br />
        Specific Gravity: <strong>{props.SG}</strong>
        <br />
        Fuel Put In (Kg): <strong>{props.fuelIn}Kg</strong>
        <br />
        Total A/C: <strong>{props.totalAC}Kg</strong>
        <br />
        Discrepancy: <strong>{props.disc}%</strong>
        <br />
      </p>
    </Paper>
  );
};

export default StoredAircraftLi;
