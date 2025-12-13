import { Predictor } from "./Predictor";

type PredictorWrapperProps = {
    className: string;
}

export const PredictorWrapper = ({className}: PredictorWrapperProps) => {
    return (
        <div className={`mx-2 flex flex-col rounded-md border-solid border ${className}`}>
            <div className="flex justify-between p-2">
            <span className="text-2xl">Prognose</span>
            <span>icon</span>
            </div>
            <hr className="bg-(--accent) h-1 w-full"/>
            <Predictor/>
       </div>
    );
}