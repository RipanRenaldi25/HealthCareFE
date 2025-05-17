import { Button } from "@/components/ui/button";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";

export const tableColumns = ({
  handleEdit = () => null,
  handleShow = () => null,
}) => [
  {
    header: "No",
    cell: (table) => <p>{table.row.index + 1}</p>,
  },
  {
    accessorKey: "school_name",
    header: () => <div className="text-center">Sekolah</div>,
  },
  {
    accessorKey: "teacher",
    header: () => <div className="text-center">Guru</div>,
  },
  {
    accessorKey: "student",
    header: () => <div className="text-center">Siswa</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center">Contact</div>,
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-center">Tanggal</div>,
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="flex gap-5 justify-center">
          <button onClick={() => handleShow(row.original)}>
            <GiMagnifyingGlass className="size-[18px] text-blue-600" />
          </button>
          <button onClick={() => handleEdit(row.original)}>
            <FaPencil className="size-[18px] text-green-600" />
          </button>
        </div>
      );
    },
  },
];
