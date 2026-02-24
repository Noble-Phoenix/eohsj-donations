import React from 'react';

interface StatisticsSectionProps {}

interface SchoolData {
  name: string;
  value: number;
  color: string;
  bgClass?: string;
  textClass?: string;
  count?: number;
  start_value?: number;
  end_value?: number;
  start_percent?: number;
  end_percent?: number;
  start_degrees?: number;
  end_degrees?: number;
}

// Chart data for schools distribution
const SCHOOLS_DATA: SchoolData[] = [
  { name: 'Jordan', value: 25, color: 'var(--color-red-700)', bgClass: 'bg-red-700', textClass: 'text-white' },
  { name: 'Palestine', value: 13, color: 'var(--color-amber-400)', bgClass: 'bg-amber-400', textClass: 'text-zinc-900' },
  { name: 'Israel', value: 6, color: 'var(--color-stone-50)', bgClass: 'bg-stone-50 border-2 border-zinc-900', textClass: 'text-zinc-900' },
];

// Function to convert values to conic gradient degrees
const generateConicGradient = (data: SchoolData[]) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const convertToPercent = (num: number) => (num / total) * 100;
  const convertToDegrees = (num: number) => (num / 100) * 360;

  let cumulativeValue = 0;
  const gradientStops = data
    .map((item) => {
      const startValue = cumulativeValue;
      const endValue = cumulativeValue + item.value;
      cumulativeValue = endValue;

      const startPercent = convertToPercent(startValue);
      const endPercent = convertToPercent(endValue);
      const startDegrees = Math.round(convertToDegrees(startPercent));
      const endDegrees = Math.round(convertToDegrees(endPercent));

      return `${item.color} ${startDegrees}deg ${endDegrees}deg`;
    })
    .join(', ');

  return gradientStops;
};

const DonutChart = () => {
  const conicGradient = generateConicGradient(SCHOOLS_DATA);

  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-72 h-72"
        style={{ borderRadius: '100%' }}
      >
        <defs>
          <clipPath id="donut-hole">
            <path d="M 50 0 a 50 50 0 0 1 0 100 a 50 50 0 0 1 0 -100 v 25 a 25 25 0 0 0 0 50 a 25 25 0 0 0 0 -50" />
          </clipPath>
        </defs>

        <foreignObject
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath="url(#donut-hole)"
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: `conic-gradient(${conicGradient})`,
            }}
          />
        </foreignObject>

        {/* Outer border */}
        <circle cx="50" cy="50" r="50" fill="none" stroke="#333333" strokeWidth="1" />

        {/* Inner border */}
        <circle cx="50" cy="50" r="25" fill="none" stroke="#333333" strokeWidth=".5px" />
      </svg>
    </div>
  );
};

const StatisticsSection = React.forwardRef<HTMLDivElement, StatisticsSectionProps>(({}, ref) => {
  return (
    <div ref={ref} className="w-full bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-cinzel text-zinc-900 text-center leading-10 mb-12">
          Know that your donation is making <br />
          a difference
        </h2>

        {/* Stats Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
          {/* Left Column - Stats */}
          <div className="flex flex-col items-center gap-8">

            <div className="flex flex-col items-center gap-1">
              <div className="text-8xl font-bold text-red-700 leading-[96px]">18,968</div>
              <div className="text-3xl font-light text-black leading-9">boys and girls helped</div>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="text-8xl font-bold text-amber-400 leading-[96px]">11,143</div>
              <div className="text-3xl font-light text-black leading-9">of them are Christian</div>
            </div>
          </div>

          {/* Center Column - Chart */}
          <div className="flex flex-col items-center gap-12">
            <div className="relative flex justify-center items-center">
              <DonutChart />
              
              {/* Center Text */}
              <div className="absolute text-center">
                <div className="text-5xl font-bold text-red-900">44</div>
                <div className="text-lg font-medium text-zinc-900 leading-tight">K-12th Grade</div>
                <div className="text-lg font-medium text-zinc-900">Schools</div>
              </div>
            </div>
            
            {/* Chart Legend */}
            <div className="flex justify-center items-center gap-8 w-1/2">
              {SCHOOLS_DATA.map((school) => (
                <div key={school.name} className="flex flex-wrap justify-center">
                  <div className={`text-2xl font-bold ${school.textClass} ${school.bgClass} w-10 h-10 rounded-full flex items-center justify-center`}>
                    {school.value}
                  </div>
                  <div className="text-md  mt-2 font-medium">{school.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Stat 2 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-8xl font-bold text-red-700 leading-[96px]">1,758</div>
              <div className="text-3xl font-light text-black leading-9">professionals</div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-8xl font-bold text-amber-400 leading-[96px]">11,143</div>
              <div className="text-3xl font-light text-black leading-9">of them are Christian</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection;
