import { HealthCareCardList } from "@/components/Dashboard/Healthcare/HealthCareCardList";
import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NavLink } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChartRequest } from "@/components/Dashboard/Healthcare/Cart/BarCart";
import HealthBlog from "@/components/Dashboard/Healthcare/Blog/HealthBlog";
import { getDateDifference } from "@/lib/utils";
const chartData = [
  { month: "January", normal: 186, risk: 80, fat: 11 },
  { month: "February", normal: 237, risk: 120, fat: 33 },
  { month: "Maret", normal: 73, risk: 190, fat: 20 },
];

const chartConfig = {
  normal: {
    label: "Normal",
    color: "green",
  },
  risk: {
    label: "Beresiko",
    color: "yellow",
  },
  fat: {
    label: "Gizi Lebih",
    color: "red",
  },
};

const HomeHealthCare = () => {
  const healthCareCards = [
    {
      icon: <FaBriefcaseMedical />,
      hexColor: "#66CF9C",
      title: "Permintaan",
      content: "200",
    },
    {
      icon: <FaBriefcaseMedical />,
      hexColor: "#66CF9C",
      title: "Tindakan",
      content: "200",
    },
    {
      icon: <FaBriefcaseMedical />,
      hexColor: "#66CF9C",
      title: "Tindakan",
      content: "200",
    },
    {
      icon: <FaBriefcaseMedical />,
      hexColor: "#66CF9C",
      title: "Tindakan",
      content: "200",
    },
  ];
  return (
    <article className="flex flex-col gap-4">
      <HealthCareCardList healthCareCards={healthCareCards} />
      <div className="grid grid-cols-5 gap-4">
        <section className="col-span-3 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-lg col-span-2">
            <header className="flex justify-between items-center">
              <h1 className="font-semibold text-lg">Request need to be done</h1>
              <NavLink
                to="intervention"
                className="font-bold text-light-blue-600"
              >
                View All
              </NavLink>
            </header>
            <Table className="table-fixed">
              <TableCaption>List of request</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">Sekolah</TableHead>
                  <TableHead className="w-[30%]">Siswa</TableHead>
                  <TableHead className="w-[10%]">Status</TableHead>
                  <TableHead className="text-right w-[30%]">Tanggal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">SD Cibiru Hilir</TableCell>
                  <TableCell>Ripan Renaldi</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">
                    {getDateDifference("2025/05/09")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">SD Cibiru Hilir</TableCell>
                  <TableCell>Ripan Renaldi</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">
                    {getDateDifference("2025/05/09")}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">SD Cibiru Hilir</TableCell>
                  <TableCell>Ripan Renaldi</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell className="text-right">
                    {getDateDifference("2025/05/09")}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <BarChartRequest title="Permintaan 7 hari sebelumnya" />
          </div>
        </section>

        <section className="col-span-2 flex flex-col gap-4">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Statistik Gizi</CardTitle>
                <CardDescription>January - Maret</CardDescription>
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
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <Line
                      dataKey="normal"
                      type="monotone"
                      stroke="green"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="risk"
                      type="monotone"
                      stroke="yellow"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      dataKey="fat"
                      type="monotone"
                      stroke="red"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      Menunjukkan statistik gizi seluruh sekolah
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div>
            {/* <BarChartRequest /> */}
            <Card>
              <HealthBlog />
            </Card>
          </div>
        </section>
      </div>
    </article>
  );
};

export default HomeHealthCare;
