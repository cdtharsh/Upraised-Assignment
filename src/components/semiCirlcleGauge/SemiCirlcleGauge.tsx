import { useEffect, useRef } from "react";
import "./semiCircleGauge.css";
import { gaugeChart } from "gauge-chart";

interface GaugeInterface {
  percentage: number;
}

function SemiCircleGauge({ percentage }: GaugeInterface) {
  const chart = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chart.current) {
      // Check if chart.current is not null
      const gaugeOptions = {
        hasNeedle: true,
        needleColor: "#1E1E28",
        needleUpdateSpeed: 1000,
        arcColors: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
        centralLabel: "",
      };

      gaugeChart(chart.current, 300, gaugeOptions).updateNeedle(percentage);
    }
  }, [percentage]);

  return (
    <div className="result_meter_round">
      <div className="result_meter_round2">
        <div className="result_meter_round3">
          <div className="result_meter" ref={chart}></div>
          <div className="result_meter_round4">
            <div className="result_meter_round5">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SemiCircleGauge;
