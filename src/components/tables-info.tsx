"use client";
import { Input } from "@/components/ui/input";
import {
  SelectItem,
  SelectContent,
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import TablesRow from "@/components/tables-row";

const TablesInfo = () => {
  const [tables, setTables] = useState([]);
  const fetchTables = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/table");
      if (response.ok) {
        const data = await response.json();
        setTables(data);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mr-2">Tables</h1>
        <div className="flex space-x-2">
          <Input className="block" placeholder="Search reservations" />
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="active">Booked</SelectItem>
              <SelectItem value="inactive">Not Booked</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Number of Seats</TableHead>
            <TableHead>Reserved</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
    {tables.map((table, index) => (
        <TablesRow key={index} table={table} />
        ))}

        </TableBody>
      </Table>
    </div>
  );
};

export default TablesInfo;
