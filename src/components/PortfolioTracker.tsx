import { useState } from "react";
import { LineChart, Line, XAxis, Legend } from "recharts";

type LineChartMouseMoveState = Parameters<
  NonNullable<React.ComponentProps<typeof LineChart>["onMouseMove"]>
>[0];

export const PortfolioTracker = () => {
  const data = [
    {
      name: "Page A",
      portfolio: 4000,
      msciWorld: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      portfolio: 3000,
      msciWorld: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      portfolio: 2000,
      msciWorld: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      portfolio: 2780,
      msciWorld: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      portfolio: 1890,
      msciWorld: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      portfolio: 2390,
      msciWorld: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      portfolio: 3490,
      msciWorld: 4300,
      amt: 2100,
    },
  ];

  const [portfolioBalance, setPortfolioBalance] = useState<number>(
    data[data.length - 1].portfolio
  );
  const [msciBalance, setMsciBalance] = useState<number>(
    data[data.length - 1].msciWorld
  );
  return (
    <>
      <div className="flex p-4 justify-between">
        <div className="flex text-xl w-auto gap-3">
          <span>Porfolio</span>
          <span>{portfolioBalance}€</span>
        </div>

        <div className="flex text-xl w-auto gap-3">
          <span>Market</span>
          <span>{msciBalance}€</span>
        </div>
      </div>

      <LineChart
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "100%",
          maxHeight: "45vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        onClick={() => {
          console.log("test");
        }}
        onMouseMove={(state: LineChartMouseMoveState) => {
          if (!state.isTooltipActive || state.activeTooltipIndex == null)
            return;

          const pointData = data[state.activeTooltipIndex as number];
          setPortfolioBalance(pointData.portfolio);
          setMsciBalance(pointData.msciWorld);
          console.log(pointData);
        }}
        className="m-0"
      >
        <XAxis dataKey="name" />

        <Legend align='right' verticalAlign='top'/>
        <Line
          type="monotone"
          dataKey="portfolio"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="msciWorld" stroke="#82ca9d" />
      </LineChart>
    </>
  );
};
