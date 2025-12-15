import { IonRange } from "@ionic/react";
import { useState, useEffect } from "react";
import React from "react";

import "./predictior.scss";

export const Predictor = () => {
  const balance = 46000;
  const [prediction, setPrediction] = useState<number>(balance);
  const [years, setyears] = useState<number>(10);
  const [interest, setInterest] = useState(7);

  useEffect(() => {
    setPrediction(Math.round(balance * (1 + interest / 100) ** years));
  }, [interest, years]);
  return (
    <>
    <div className="flex justify-center ">
          <span></span>
          <span>{prediction}</span>
        </div>
      <div className="flex flex-col items-start px-2">
        
        <div className="flex w-[80%]">
        <p className="self-center">
             Interest per Year
            </p>
        <div className="flex w-[80%] py-5">
          <IonRange
            aria-label="Interest"
            value={interest}
            min={0}
            max={30}
            pin={true}
            onIonInput={({ detail }) => {
              const newInterest = detail.value as number;
              setInterest(newInterest);
            }}
          />
        </div>
        </div>
        <div className="flex w-[50%] py-5">
          <IonRange
            aria-label="Years"
            value={years}
            min={0}
            max={50}
            pin={true}
            onIonInput={({ detail }) => setyears(detail.value as number)}
          >
            <p slot="label">
             Years
            </p>
          </IonRange>
        </div>
      </div>
    </>
  );
};
