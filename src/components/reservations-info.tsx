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
import { useState, useEffect, use } from "react";
import ReservationRow from "@/components/reservation-row";

const ReservationsInfo = () => {
  const [reservations, setReservations] = useState([]);
  const fetchReservations = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reservation");
      if (response.ok) {
        const data = await response.json();
        setReservations(data);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Reservations</h1>
        <div className="flex space-x-2">
          <Input className="block" placeholder="Search reservations" />
          <Select>
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Party Size</TableHead>
            <TableHead>Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((reservation) => (
            <ReservationRow reservation={reservation} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReservationsInfo;
