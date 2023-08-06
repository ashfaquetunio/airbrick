import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";
import { subDays, format, parseISO } from "date-fns";
import { AiFillCaretDown } from "react-icons/ai";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PrimarySelector from "../others/PrimarySelector";

const data = [];

for (let i = 100; i >= 0; i--) {
  data.push({
    data: subDays(new Date(), i).toISOString().substring(0, 10),
    value: 1 + Math.random(),
  });
}

const selectorData = [
  {
    label: "MyUSD",
    icon: "assets/images/usd_badge.svg",
  },
  {
    label: "BRICKS",
    icon: "assets/images/bricks_badge.svg",
  },
];

const DashboardChart = () => {
  const [selection, setSelection] = useState(selectorData[0]);

  const handleSelection = (entry) => {
    setSelection(entry);
  };

  return (
    <>
      <article className="dashboard-chart pt-5">
        <p className="sub-title">Price Chart</p>
        <div className="flex-wrap-items shrink chart-header">
          <p className="normal-para">MyUSD to USD chart</p>
          <div className="flex-wrap-items shrink">
            <PrimarySelector
              className="w-75"
              data={selectorData}
              selection={selection}
              handleSelection={handleSelection}
              stack ={false}
            />

            <p className="normal-para muted">default</p>
          </div>
          <div className="button-stack ms-md-auto">
            <button className="active">1D</button>
            <button>7D</button>
            <button>1M</button>
            <button>3M</button>
            <button>All</button>
          </div>
        </div>
        <div className="section-chart py-5">
          <ResponsiveContainer width={"100%"} height={400}>
            <AreaChart data={data}>
              {/* <defs>
              <LinearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset={'0%'} stopColor="#ffffff" stopOpacity={0.4}/>
                <stop offset={'75%'} stopColor="#000000" stopOpacity={0.05}/>
              </LinearGradient>
            </defs> */}
              <Area dataKey="value" stroke="#7cc4fa" fill="#d6edfe" />
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
                  if (date.getDate() % 7 === 0) {
                    return format(date, "MMM, d");
                  }
                  return "";
                }}
              />
              <YAxis
                dataKey="value"
                axisLine={false}
                tickLine={false}
                tickCount={6}
                tickFormatter={(number) => `£ ${number.toFixed(3)}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid opacity={0.5} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </article>
    </>
  );

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return <div></div>;
    }
    return null;
  }
};

export default DashboardChart;
