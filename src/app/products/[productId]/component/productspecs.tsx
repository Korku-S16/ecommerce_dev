
import { useState } from "react";
import {
  FaMobileAlt,
  FaMicrochip,
  FaMemory,
  FaCamera,
  FaBatteryFull,
} from "react-icons/fa";

export default function ProductSpecs({specifications}) {
  Object.entries(specifications)?.map(([key, value]) => (
    <Spec label={key} value={value} key={key} />
  ))

}
interface SpecProps {
  icon?: React.ReactNode;
  label: string;
  value: number|string;
}

function Spec({  label, value }: SpecProps) {
  return (
    <div className="flex items-center gap-2">
    
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

