import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ReservationRowProps = {
  reservation: {
    id: number;
    customerName: string;

    time: string;
    date: string;
    nOfCustomers: number;
    isFullfilled: string;
  };
};

const ReservationRow = ({ reservation }: ReservationRowProps) => {
  let { customerName, time, date, nOfCustomers, isFullfilled } = reservation;
  date = new Date(date).toLocaleDateString();
  console.log(isFullfilled);
  return (
    <TableRow>
      <TableCell className="font-medium">{customerName}</TableCell>

      <TableCell>{time}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{nOfCustomers}</TableCell>
      <TableCell>
        <Badge variant="secondary">
          {!isFullfilled ? "Active" : "Inactive"}
        </Badge>
      </TableCell>
      <TableCell>
        <Button variant="outline">Edit</Button>
      </TableCell>
    </TableRow>
  );
};

export default ReservationRow;
