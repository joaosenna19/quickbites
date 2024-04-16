import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type TablesRowProps = {
  table: {
    id: string;
    numOfSeats: number;
    isAvailable: boolean;
  };
};

const TablesRow = ({ table }: TablesRowProps) => {
  let { numOfSeats, isAvailable } = table;
 
  return (
    <TableRow>
     
      <TableCell>{numOfSeats}</TableCell>
    
      <TableCell>
        <Badge variant="secondary">
          {!isAvailable ? "Free" : "Reserved"}
        </Badge>
      </TableCell>
      <TableCell>
        <Button variant="outline">Edit</Button>
      </TableCell>
    </TableRow>
  );
};

export default TablesRow;
