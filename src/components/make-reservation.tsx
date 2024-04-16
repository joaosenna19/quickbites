import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "./ui/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type ReservationData = {
  date: string;
  customerName: string;
  reservationCode: string;
  nOfCustomers: number;
  time: string;
};

const MakeReservation = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<ReservationData> = async (data) => {
    data.date = new Date(data.date).toISOString();
    data.nOfCustomers = parseInt(data.nOfCustomers.toString());
    console.log(data);

    try {
      const response = await fetch("http://localhost:5000/api/reservation", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        toast({
          title: "Reservation made",
          description: `Your reservation code is ${responseData.reservationCode}`,
        });
      } else if (response.status === 400) {
        const errorData = await response.json();
        console.log(errorData);
        toast({
          title: "Error",
          description:
            errorData.error ||
            "An error occurred while making your reservation",
        });
      } else {
        toast({
          title: "Error",
          description: "An error occurred while making your reservation",
        });
      }
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while making your reservation",
      });
    }
  };

  const { toast } = useToast();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mb-4">Make a reservation</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">
            Full Name
          </label>
          <Input
            id="customerName"
            placeholder="Enter your name"
            required
            {...register("customerName")}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="nOfCustomers"
          >
            Party Size
          </label>
          <Input
            id="nOfCustomers"
            placeholder="2"
            type="number"
            required
            {...register("nOfCustomers")}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            Date
          </label>
          <Input id="date" type="date" required {...register("date")} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="time">
            Time
          </label>
          <Input id="time" type="time" required {...register("time")} />
        </div>
      </div>
      <Button className="bg-green-500 hover:bg-green-600 w-full" type="submit">
        Reserve
      </Button>
    </form>
  );
};

export default MakeReservation;
