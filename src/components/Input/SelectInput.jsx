import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const SelectInput = ({ selectItems = [], title = "Select Title" }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("show", 10);
    setSearchParams(searchParams);
  }, []);
  return (
    <Select
      onValueChange={(value) => {
        searchParams.set("show", value);
        setSearchParams(searchParams);
      }}
    >
      <SelectTrigger className="w-[60px]">
        <SelectValue placeholder={10} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {selectItems.map((selectItem) => (
            <SelectItem value={selectItem.value}>
              {selectItem.content}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
