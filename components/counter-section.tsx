"use client";

import { dataCounter } from "@/data";
import { useEffect, useRef, useState } from "react";

const CounterSection = () => {
  return (
    <div className="py-12 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {dataCounter.map(({ id, endCounter, text }) => (
          <div key={id} className="text-center p-4 bg-gray-800 rounded">
            <div className="text-2xl md:text-3xl font-bold text-red-600">+{endCounter}</div>
            <div className="text-xs text-gray-400 mt-1">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
