import { HealthCareCardList } from "@/components/Dashboard/Healthcare/HealthCareCardList";
import React, { useEffect, useState } from "react";
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
import { NavLink, useSearchParams } from "react-router-dom";
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
import { getCurrentDate, getDateDifference } from "@/lib/utils";
import {
  getNutritionSummary,
  getRequestsByHealthCare,
  getRequestSummary,
} from "@/lib/API/Puskesmas/puskesmasApi";
const chartDataDummy = [
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
    // {
    //   icon: <FaBriefcaseMedical />,
    //   hexColor: "#66CF9C",
    //   title: "Tindakan",
    //   content: "200",
    // },
    // {
    //   icon: <FaBriefcaseMedical />,
    //   hexColor: "#66CF9C",
    //   title: "Tindakan",
    //   content: "200",
    // },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    status: "PENDING",
    startDate: "",
    endDate: "",
    sortedByDate: "desc",
  });

  const [requests, setRequests] = useState([]);
  const [requestPastSevenDays, setRequestPastSevenDays] = useState([]);
  const [requestPastSevenDaysSummary, setRequestPastSevenDaysSummary] =
    useState([]);

  const [nutritionSummary, setNutritionSummary] = useState([]);
  const [chartData, setChartData] = useState(chartDataDummy);
  const [requestSummary, setRequestSummary] = useState([]);

  useEffect(() => {
    const fetchRequestIntervention = async (
      setState,
      callback = () => null,
      isSlice = true
    ) => {
      callback();

      const response = await getRequestsByHealthCare({ ...filters });
      if (!response && !response.data) {
        return;
      }
      if (isSlice) {
        const slicedData = response.data.slice(0, 3);
        setState(slicedData);
        return;
      }
      setState(response.data);
    };

    const getPast7Days = () => {
      const date = new Date();
      date.setDate(date.getDate() - 7);
      return date.toISOString().split("T")[0];
    };

    const fetchNutritionSummary = async () => {
      const response = await getNutritionSummary();
      const groupByMonth = Object.groupBy(response.data, ({ bulan }) => bulan);

      const chartData = Object.entries(groupByMonth).map(([month, values]) => {
        const returnedData = { month, normal: 0, risk: 0, fat: 0 };

        values.forEach((value) => {
          if (value.status_id === 3) {
            returnedData.normal += 1;
          } else if (value.status_id === 4) {
            returnedData.risk += 1;
          } else if (value.status_id === 5) {
            returnedData.fat += 1;
          }
        });
        return returnedData;
      });
      setChartData(chartData);
    };

    const fetchRequestSummary = async () => {
      const response = await getRequestSummary();
      console.log({ response });
      const mapSummary = Object.entries(response.data).map(([key, values]) => {
        /**
       * {
      icon: <FaBriefcaseMedical />,
      hexColor: "#66CF9C",
      title: "Permintaan",
      content: "200",
    }
       */

        return {
          icon: <FaBriefcaseMedical />,
          hexColor: "#66CF9C",
          content: values,
          title: key,
        };
      });
      setRequestSummary(mapSummary);
    };

    fetchRequestIntervention(setRequests);
    fetchRequestIntervention(setRequestPastSevenDays, () => {
      setFilters((prevValue) => ({
        ...prevValue,
        startDate: getPast7Days(),
      }));
    });
    fetchNutritionSummary();
    fetchRequestSummary();
  }, []);

  console.log({ requestSummary });
  useEffect(() => {
    if (requestPastSevenDays.length > 0) {
      const groupBy = Object.groupBy(requestPastSevenDays, ({ created_at }) =>
        new Date(created_at).getDate()
      );
      const countPerDate = Object.entries(groupBy).map(([date, items]) => ({
        date,
        request: items.length,
      }));
      setRequestPastSevenDaysSummary(countPerDate);
    }
  }, [requestPastSevenDays]);

  console.log({ chartData });

  return (
    <article className="flex flex-col gap-4">
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
                {requests.length > 0 ? (
                  requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        {request.user.teacher.institution.name}
                      </TableCell>
                      <TableCell>{request.family_member.full_name}</TableCell>
                      <TableCell>{request.status}</TableCell>
                      <TableCell className="text-right">
                        {getDateDifference(request.created_at)}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <p>Tidak ada data</p>
                )}

                {/* <TableRow>
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
                </TableRow> */}
              </TableBody>
            </Table>
          </div>
          <HealthCareCardList healthCareCards={requestSummary} />

          <div>
            <BarChartRequest
              title="Permintaan 7 hari sebelumnya"
              data={requestPastSevenDaysSummary}
            />
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
