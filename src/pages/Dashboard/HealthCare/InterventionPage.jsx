import { DatePicker } from "@/components/Input/DatePicker";
import { SelectInput } from "@/components/Input/SelectInput";
import Modal from "@/components/Modal/Modal";
import { tableColumns } from "@/components/Table/TableData/Columns";
import { TableWithData } from "@/components/Table/TableData/TableWithData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { getDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { GrClearOption } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { FaWeightScale } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosMale, IoMdMale } from "react-icons/io";
import { Progress } from "@/components/ui/progress";
import { BasicTable } from "@/components/Table/BasicTable";
import { TableCell, TableRow } from "@/components/ui/table";

// {
//   id: "1",
//   status: "pending",
//   teacher: "Ripan Renaldi",
//   school_name: "SDN 7",
//   created_at: getDate("2025/05/09"),
//   email: "ripanrenaldi25@gmail.com",
//   student: "Siswa 1",
// },

// const dummyData = [
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//     student: "Siswa 1",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),

//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),

//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi tengah",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
//   {
//     id: "1",
//     status: "pending",
//     teacher: "Ripan Renaldi akhir",
//     school_name: "SDN 7",
//     created_at: getDate("2025/05/09"),
//     email: "ripanrenaldi25@gmail.com",
//   },
// ];

const dummyData = Array.from({ length: 33 }).map((_, index) => ({
  id: index + 1,
  status: "pending",
  teacher: "Ripan Renaldi",
  school_name: "SDN 7 asdasdsadasd",
  created_at: getDate("2025/05/09"),
  email: "ripanrenaldi25@gmail.com",
  student: `Siswa ${index + 1} renaldli abcs rada panjang`,
}));

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
  const [open, setOpen] = useState(false);

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

  const clearAllInput = () => {
    setQuery("");
    setDateInput(null);
  };

  const handleShow = (row) => {
    setOpen(true);
    console.log({ row });
  };

  const format = {
    headers: [
      {
        alias: "No",
        name: "no",
      },
      { alias: "Judul", name: "title" },
      { alias: "Skor", name: "score" },
    ],
  };

  return (
    <article>
      <Modal title="Permintaan Rekomendasi" isOpen={open} setIsOpen={setOpen}>
        <section className="flex flex-col gap-3">
          <header className="flex flex-col items-center">
            <div className="flex items-center flex-col justify-center">
              <Avatar className="size-20 mb-3">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex items-center relative font-semibold">
                <h1>Ripan Renaldi</h1>
                <IoMdMale className="absolute -right-5" />
              </div>
              <h1>SD Cibiru Hilir </h1>
            </div>
          </header>
          <div>
            <h1 className="font-semibold">Informasi Nutrisi Siswa</h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex gap-2 items-center">
                <div className="rounded-full overflow-hidden bg-blue_primary p-3 text-center text-white">
                  <FaWeightScale className="size-8" />
                </div>
                <div className="">
                  <h1>Berat Badan</h1>
                  <p>55 kg</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full overflow-hidden bg-blue_primary p-3 text-center text-white">
                  <FaWeightScale className="size-8" />
                </div>
                <div className="">
                  <h1>Berat Badan</h1>
                  <p>55 kg</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full overflow-hidden bg-blue_primary p-3 text-center text-white">
                  <FaWeightScale className="size-8" />
                </div>
                <div className="">
                  <h1>Berat Badan</h1>
                  <p>55 kg</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full overflow-hidden bg-blue_primary p-3 text-center text-white">
                  <FaWeightScale className="size-8" />
                </div>
                <div className="">
                  <h1>Berat Badan</h1>
                  <p>55 kg</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold">Informasi Skor</h1>
            <div>
              <BasicTable format={format}>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Pengetahuan tentang gizi seimbang</TableCell>
                  <TableCell>
                    <p>33</p>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Perilaku Anak</TableCell>
                  <TableCell>
                    <p>33</p>
                  </TableCell>
                </TableRow>
              </BasicTable>
            </div>
          </div>
        </section>
      </Modal>
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
                value={query}
              />
            </div>
            <div>
              <DatePicker date={dateInput} setDate={setDateInput} />
            </div>
            <Button
              asChild
              variant="destructive"
              className="w-1/6 cursor-pointer hover:bg-red-800"
              onClick={() => clearAllInput()}
            >
              <GrClearOption />
            </Button>
          </section>
          <section className="flex gap-2  items-center">
            <p>Showing</p>
            <SelectInput selectItems={selectInput} title="Data" />
            <p>of {data.length} results</p>
          </section>
        </header>
        <TableWithData
          columns={tableColumns({ handleShow })}
          data={data}
          count={dummyData.length}
        />
      </section>
    </article>
  );
};

export default InterventionPage;
