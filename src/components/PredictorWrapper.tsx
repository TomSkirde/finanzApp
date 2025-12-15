import { IonIcon, IonButton } from "@ionic/react";
import { Predictor } from "./Predictor";
import {settings } from "ionicons/icons";

type PredictorWrapperProps = {
    className: string;
}

export const PredictorWrapper = ({className}: PredictorWrapperProps) => {
    return (
        <div className={`mx-8 flex flex-col rounded-md border-solid border ${className}`}>
            <div className="flex justify-between">
            <span className="text-xl self-center px-3">Prognose</span>
            <IonButton color="light">
            <IonIcon icon={settings}/> 
            </IonButton>
            </div>
            <hr className="bg-(--accent) h-1 w-full"/>
            <Predictor/>
       </div>
    );
}