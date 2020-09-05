import React, { useReducer } from "react";
import { reducer, initialState } from "./_formReduce";
import "./styles.scss";
import { DayPlaner } from "./_dayPlaner";

export const Calendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="calendar-container">
      <div className="row">
        <div className="col-12 ">
          <div className="box "> Twój plan odżywiania</div>
        </div>
      </div>
      <div className="days-container">
        <div className="day-wrapper">
          <DayPlaner
            dayName="poniedziałek"
            state={state}
            dispatch={dispatch}
            typeData="monday"
          />
        </div>
        <div className="day-wrapper">
          <DayPlaner
            dayName="wtorek"
            state={state}
            dispatch={dispatch}
            typeData="tuesday"
          />
        </div>
        <div className="day-wrapper">
          <DayPlaner
            dayName="środa"
            state={state}
            dispatch={dispatch}
            typeData="wednesday"
          />
        </div>

        <div className="day-wrapper">
          <DayPlaner
            dayName="czwartek"
            state={state}
            dispatch={dispatch}
            typeData="thursday"
          />
        </div>
        <div className="day-wrapper">
          <DayPlaner
            dayName="piątek"
            state={state}
            dispatch={dispatch}
            typeData="friday"
          />
        </div>
        <div className="day-wrapper">
          <DayPlaner
            dayName="sobota"
            state={state}
            dispatch={dispatch}
            typeData="saturday"
          />
        </div>

        <div className="day-wrapper">
          <DayPlaner
            dayName="Niedziela kotełkowa"
            state={state}
            dispatch={dispatch}
            typeData="sunday"
          />
        </div>
      </div>
    </div>
  );
};
