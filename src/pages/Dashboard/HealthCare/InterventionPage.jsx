import { TableWithData } from "@/components/Table/TableData/TableWithData";
import { tableColumns } from "@/components/Table/TableData/Columns";
import { getDate, getDateDifference } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { DatePicker } from "@/components/Input/DatePicker";
import { useEffect, useState } from "react";
import { SelectInput } from "@/components/Input/SelectInput";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

const dummyData = [
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),

    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),

    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi tengah",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
  {
    id: "1",
    status: "pending",
    teacher: "Ripan Renaldi akhir",
    school_name: "SDN 7",
    created_at: getDate("2025/05/09"),
    email: "ripanrenaldi25@gmail.com",
  },
];

const InterventionPage = () => {
  const [data, setData] = useState([]);
  const selectInput = [
    {
      value: 10,
      content: "10",
    },
    {
      value: 25,
      content: "25",
    },
    {
      value: 50,
      content: "50",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateInput, setDateInput] = useState(null);
  const show = +searchParams.get("show");
  const currentIndex = +searchParams.get("page");
  const firstIndex = currentIndex * show - show;
  const lastIndex = firstIndex + show;

  useEffect(() => {
    const fetch = async () => {
      const test = await new Promise((resolve, rejected) => {
        resolve(dummyData.slice(firstIndex, lastIndex));
      });
      setData(test);
    };
    fetch();
  }, [searchParams.get("page")]);

  useEffect(() => {
    console.log({ firstIndex, lastIndex });
    const data = dummyData.slice(firstIndex, lastIndex);
    setData(data);
  }, [searchParams.get("show")]);

  const [query, setQuery] = useState("");
  const debounceSearchInput = useDebounce(query);
  return (
    <article>
      <section className="bg-white p-4 rounded-lg flex flex-col gap-2">
        <header className="flex gap-2 items-center justify-between">
          <section className="flex items-center gap-2 w-2/3 ">
            <div className="relative w-full">
              <IoSearchOutline className="absolute size-6 top-1/2 -translate-y-1/2 left-1 opacity-50" />
              <Input
                type="text"
                placeholder="Search school or id"
                className="px-8"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div>
              <DatePicker date={dateInput} setDate={setDateInput} />
            </div>
          </section>
          <section className="flex gap-2  items-center">
            <p>Showing</p>
            <SelectInput selectItems={selectInput} title="Data" />
            <p>of {data.length} results</p>
          </section>
        </header>
        <TableWithData
          columns={tableColumns}
          data={data}
          count={dummyData.length}
        />
      </section>
    </article>
  );
};

export default InterventionPage;
