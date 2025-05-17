import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

export const TableWithData = ({ columns = [], data = [], count = 0 }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPage = Math.ceil(count / 10);
  const currentPage = +searchParams.get("page");
  const canNextPage = currentPage < totalPage;
  const canPreviousPage = currentPage > 1;

  return (
    <div className="rounded-md border">
      <Table className="table-auto">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="bg text-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            searchParams.set("page", currentPage - 1);
            setSearchParams(searchParams);
          }}
          disabled={!canPreviousPage}
        >
          <FaAngleLeft />
          Back
        </Button>
        <section className="flex gap-1">
          {Array.from({ length: totalPage }).map((item, index) => (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                searchParams.set("page", index + 1);
                setSearchParams(searchParams);
                table.setPageIndex(index);
              }}
              className={`border ${
                +searchParams.get("page") === index + 1 &&
                "bg-blue_primary text-white"
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </section>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            searchParams.set("page", currentPage + 1);
            setSearchParams(searchParams);
          }}
          disabled={!canNextPage}
          className="hover:bg-none"
        >
          Next
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
};
