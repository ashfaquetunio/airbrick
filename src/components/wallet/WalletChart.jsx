import React, { useEffect } from "react";
import { subDays, format, parseISO } from "date-fns";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [];

for (let i = 100; i >= 0; i--) {
  data.push({
    date: subDays(new Date(), i).toISOString().substring(0, 10),
    value: 1 + Math.random(),
  });
}

const WalletChart = () => {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <div className="scroll-x">
        <article className="wallet-chart">
          <div className="flex-wrap-items shrink">
            <button className="normal-para">HOUR</button>
            <button className="normal-para muted">D</button>
            <button className="normal-para muted">W</button>
            <button className="normal-para muted">M</button>
            <button className="normal-para muted">Y </button>
            <button className="normal-para muted">A</button>
          </div>
          <div className="section-chart py-5">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF675A" stopOpacity={1} />
                    <stop offset="95%" stopColor="#FF895B" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                {/* <defs>
              <LinearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset={'0%'} stopColor="#ffffff" stopOpacity={0.4}/>
                <stop offset={'75%'} stopColor="#000000" stopOpacity={0.05}/>
              </LinearGradient>
            </defs> */}
                <Area dataKey="value" stroke="#7cc4fa00" fill="url(#colorUv)" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tickCount={12}
                  type="category"
                  tick={{
                    fill: "#002159",
                    fontWeight: "500",
                    fontSize: "0.8rem",
                  }}
                  tickFormatter={(str) => {
                    const date = parseISO(str);
                    return format(date, "MM, d");
                  }}
                />
                <YAxis
                  dataKey="value"
                  axisLine={false}
                  tickLine={false}
                  tickCount={9}
                  tickFormatter={(number) => `$ ${number.toFixed(3)}`}
                  orientation="right"
                  tick={{
                    fill: "#002159",
                    fontWeight: "500",
                    fontSize: "0.8rem",
                  }}
                />

                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid opacity={0.5} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>
    </>
  );

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return <div></div>;
    }
    return null;
  }
};

export default WalletChart;
