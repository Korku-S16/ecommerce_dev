export default function ProductDetails() {
  return (
    <div className="bg-gray-50 mt-12 p-8 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Details</h2>
      <p className="text-sm text-gray-700 mb-6">
        As one of the top phones in its category, the iPhone 14 Pro Max stands
        out with its massive 6.7-inch screen, making it a modern marvel in the
        smartphone industry. Stunning brightness, features like dynamic island,
        48 MP main camera, and the powerful Apple A16 Bionic chip make this a
        solid option for professionals and power users.
      </p>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Screen</h3>
        <div className="grid grid-cols-2 text-sm text-gray-700 border-t border-b divide-y divide-gray-200">
          <div className="py-2 border-b">Screen diagonal</div>
          <div className="py-2 border-b">6.7"</div>
          <div className="py-2 border-b">The screen resolution</div>
          <div className="py-2 border-b">2796×1290</div>
          <div className="py-2 border-b">The refresh rate</div>
          <div className="py-2 border-b">120 Hz</div>
          <div className="py-2 border-b">Screen type</div>
          <div className="py-2 border-b">OLED</div>
          <div className="py-2 border-b">Screen brightness</div>
          <div className="py-2 border-b">2000 nits</div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">CPU</h3>
        <div className="grid grid-cols-2 text-sm text-gray-700 border-t border-b divide-y divide-gray-200">
          <div className="py-2 border-b">CPU</div>
          <div className="py-2 border-b">Apple A16 Bionic</div>
          <div className="py-2 border-b">Number of Cores</div>
          <div className="py-2 border-b">6</div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="text-black underline text-sm hover:text-gray-700">
          View More
        </button>
      </div>
      <div className="mt-12 px-4 md:px-0">
        <h2 className="text-xl font-semibold mb-4">Ratings</h2>
        <div className="flex items-start gap-8">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="text-4xl font-bold">4.8</div>
            <div className="text-sm text-gray-500 mt-1">of 125 reviews</div>
            <div className="flex mt-2 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.561-.955L10 0l2.952 5.955 6.561.955-4.757 4.635 1.122 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {[
              { label: "Excellent", value: 100 },
              { label: "Good", value: 11 },
              { label: "Average", value: 3 },
              { label: "Below Average", value: 8 },
              { label: "Poor", value: 1 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-32 text-sm text-gray-700">{item.label}</div>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-yellow-400 rounded"
                    style={{ width: `${(item.value / 100) * 100}%` }}
                  />
                </div>
                <div className="w-6 text-sm text-gray-600 text-right">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
