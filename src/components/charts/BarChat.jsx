import { BarChart, Card, Title } from "@tremor/react";

const chartdata2 = [
  {
    name: "Mon",
    "This Week": 890,
    "Last Week": 338,
  },
  {
    name: "Tue",
    "This Week": 500,
    "Last Week": 360,
  },
  {
    name: "Wed",
    "This Week": 890,
    "Last Week": 650,
  },
  {
    name: "Thu",
    "This Week": 450,
    "Last Week": 338,
  },
  {
    name: "Fri",
    "This Week": 500,
    "Last Week": 620,
  },
  {
    name: "Sat",
    "This Week": 300,
    "Last Week": 240,
  },
  {
    name: "Sun",
    "This Week": 500,
    "Last Week": 320,
  },
];

let valueFormatter = (number) =>
  `${new Intl.NumberFormat("us").format(number).toString()}`;

const BarChartComponent = () => (
  <Card>
    <Title>Overview</Title>
    <BarChart
      className="mt-6 h-full"
      data={chartdata2}
      index="name"
      categories={[
        "This Week",
        "Last Week",
        // "Group C",
        // "Group D",
        // "Group E",
        // "Group F",
      ]}
      colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
      valueFormatter={valueFormatter}
      yAxisWidth={32}
    />
  </Card>
);

export default BarChartComponent;
