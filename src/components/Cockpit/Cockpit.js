import React from "react";
import InputForm from "../InputForm/InputForm";
import Discrepancy from "../Discrepancy/Discrepancy";
import StoredAircraftCont from "../StoredAircraft/StoredAircraft";
import Button from "@material-ui/core/Button";

const cockpit = props => {
  const onClickHandler = () => {
    if (props.submitted === false) {
      return props.setSubmitted(true);
    } else if (props.submitted) {
      return props.setSubmitted(false);
    }
  };

  const storedAircraftButtonHandler = () => {
    if (props.storedAircraft === "") {
      return (
        <Button className="buttons" variant="contained" disabled>
          Stored
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={props.refuseEmptyStoredAircraftHandler}
        >
          Stored
        </Button>
      );
    }
  };

  const onSubmitHandler = () => {
    if (props.showStoredAircraft) {
      return (
        <div>
          <StoredAircraftCont
            storedAircraft={props.storedAircraft}
            setShowStoredAircraft={props.setShowStoredAircraft}
            resetApp={props.resetApp}
          />
        </div>
      );
    } else if (props.submitted === false) {
      return (
        <div>
          <InputForm
            tailNumber={props.tailNumber}
            setTailNumber={props.setTailNumber}
            remainingFuel={props.remainingFuel}
            setRemainingFuel={props.setRemainingFuel}
            specificGravity={props.specificGravity}
            handleSliderChange={props.handleSliderChange}
            finalFuelState={props.finalFuelState}
            setFinalFuelState={props.setFinalFuelState}
            deliveredFuel={props.deliveredFuel}
            setDeliveredFuel={props.setDeliveredFuel}
            submitted={props.submitted}
            setSubmitted={props.setSubmitted}
            setShowStoredAircraft={props.setShowStoredAircraft}
            onClickHandler={onClickHandler}
            storedAircraft={props.storedAircraft}
            refuseEmptyStoredAircraftHandler={
              props.refuseEmptyStoredAircraftHandler
            }
            storedAircraftButtonHandler={storedAircraftButtonHandler}
          />
        </div>
      );
    } else if (props.submitted) {
      return (
        <div>
          <Discrepancy
            tailNumber={props.tailNumber}
            remainingFuel={props.remainingFuel}
            specificGravity={props.specificGravity}
            finalFuelState={props.finalFuelState}
            deliveredFuel={props.deliveredFuel}
            setSubmitted={props.setSubmitted}
            setShowStoredAircraft={props.setShowStoredAircraft}
            setStoredAircraft={props.setStoredAircraft}
            storedAircraft={props.storedAircraft}
            saveDetailsHandler={props.saveDetailsHandler}
            discrepancy={props.discrepancy}
            setDiscrepancy={props.setDiscrepancy}
            roundedNum={props.roundedNum}
            onClickHandler={onClickHandler}
            submitted={props.submitted}
            refuseEmptyStoredAircraftHandler={
              props.refuseEmptyStoredAircraftHandler
            }
            storedAircraftButtonHandler={storedAircraftButtonHandler}
          />
        </div>
      );
    }
  };
  return onSubmitHandler();
};

export default cockpit;
