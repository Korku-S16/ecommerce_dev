import {
  FaMobileAlt,
  FaMicrochip,
  FaMemory,
  FaCamera,
  FaBatteryFull,
} from "react-icons/fa";

export default function ProductSpecs() {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
      <Spec icon={<FaMobileAlt />} label="Screen size" value="6.7”" />
      <Spec icon={<FaMicrochip />} label="CPU" value="Apple A16 Bionic" />
      <Spec icon={<FaMemory />} label="No. of Cores" value="6" />
      <Spec icon={<FaCamera />} label="Main camera" value="48+12+12 MP" />
      <Spec icon={<FaCamera />} label="Front camera" value="12 MP" />
      <Spec icon={<FaBatteryFull />} label="Battery" value="4323 mAh" />
    </div>
  );
}

interface SpecProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function Spec({ icon, label, value }: SpecProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-lg">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}
