"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const chartData = [
  { month: "Janeiro", science_computer: 186, law: 80 },
  { month: "Fevereiro", science_computer: 305, law: 200 },
  { month: "Março", science_computer: 237, law: 120 },
  { month: "Abril", science_computer: 73, law: 190 },
  { month: "Maio", science_computer: 209, law: 130 },
  { month: "Junho", science_computer: 214, law: 140 },
];

const chartConfig = {
  science_computer: {
    label: "Ciências da Computação",
    color: "hsl(var(--chart-1))",
  },
  law: {
    label: "Direito",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartActiveCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cursos em alta</CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="science_computer"
              type="monotone"
              stroke="var(--color-science_computer)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="law"
              type="monotone"
              stroke="var(--color-law)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Aumento de 5.2% este mês <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Exibindo visitantes totais dos últimos 6 meses
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
