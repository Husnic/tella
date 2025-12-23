"use client";

import { useState } from "react";

interface CitationGraphProps {
  data: Array<{ year: number; citations: number }>;
}

export default function CitationGraph({ data }: CitationGraphProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return null;
  }

  const maxCitations = Math.max(...data.map((d) => d.citations));
  const chartHeight = 200;
  const chartWidth = 300;
  const barWidth = chartWidth / data.length - 10;
  const padding = 40;

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-white p-6 max-w-sm ">
      <svg
        width="100%"
        height={chartHeight + padding + 40}
        viewBox={`0 0 ${chartWidth} ${chartHeight + padding + 40}`}
        className="overflow-visible"
      >
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((percent, i) => {
          const y = chartHeight - chartHeight * percent + padding;
          return (
            <g key={i}>
              <line
                x1={0}
                y1={y}
                x2={chartWidth}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <text
                x={-10}
                y={y + 4}
                fontSize="10"
                fill="#6b7280"
                textAnchor="end"
              >
                {Math.round(maxCitations * percent)}
              </text>
            </g>
          );
        })}

        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.citations / maxCitations) * chartHeight;
          const x = (index * chartWidth) / data.length + 5;
          const y = chartHeight - barHeight + padding;

          return (
            <g
              key={item.year}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer"
            >
              {/* Bar */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={Math.max(barHeight, 5)}
                fill="#2d5a3d"
                rx="4"
                className="transition-opacity duration-200"
                opacity={
                  hoveredIndex === null || hoveredIndex === index ? 1 : 0.5
                }
              />

              {/* Hover tooltip */}
              {hoveredIndex === index && (
                <>
                  <rect
                    x={x + barWidth / 2 - 40}
                    y={y - 35}
                    width="80"
                    height="30"
                    fill="#1e293b"
                    rx="6"
                    className="drop-shadow-lg"
                  />
                  <polygon
                    points={`${x + barWidth / 2 - 5},${y - 5} ${
                      x + barWidth / 2 + 5
                    },${y - 5} ${x + barWidth / 2},${y}`}
                    fill="#1e293b"
                  />
                  <text
                    x={x + barWidth / 2}
                    y={y - 22}
                    fontSize="14"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                  >
                    {item.citations}
                  </text>
                  <text
                    x={x + barWidth / 2}
                    y={y - 10}
                    fontSize="10"
                    fill="white"
                    textAnchor="middle"
                    opacity="0.8"
                  >
                    citations
                  </text>
                </>
              )}

              {/* Year label */}
              <text
                x={x + barWidth / 2}
                y={chartHeight + padding + 20}
                fontSize="12"
                fontWeight="600"
                fill="#1e293b"
                textAnchor="middle"
              >
                {item.year}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
