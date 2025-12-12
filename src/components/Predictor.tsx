import { IonRange } from "@ionic/react";

export const Predictor = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%]">
          <IonRange
            aria-label="Temperature"
            value={7}
            min={0}
            max={30}
            pin={true}
          ></IonRange>
        </div>
      </div>
    </>
  );
};
