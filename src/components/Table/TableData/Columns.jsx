import { Button } from "@/components/ui/button";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";
import { getCurrentDate, getDate } from "@/lib/utils";

export const tableColumns = ({
  handleEdit = () => null,
  handleShow = () => null,
}) => [
  {
    header: "No",
    cell: (table) => <p>{table.row.index + 1}</p>,
  },
  {
    accessorKey: "user.teacher.institution.name",
    header: () => <div className="text-center">Sekolah</div>,
  },
  {
    accessorKey: "user.teacher.name",
    header: () => <div className="text-center">Guru</div>,
  },
  {
    accessorKey: "family_member.student.full_name",
    header: () => <div className="text-center">Siswa</div>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center">Status</div>,
  },
  {
    accessorKey: "user.email",
    header: () => <div className="text-center">Contact</div>,
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-center">Tanggal</div>,
    cell: ({ row }) => {
      const original = row.original;
      return <p>{getDate(original.created_at)}</p>;
    },
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
