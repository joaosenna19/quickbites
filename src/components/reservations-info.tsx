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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ReservationsInfo = () => {
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
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Party Size</TableHead>
            <TableHead>Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>johndoe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>18:00</TableCell>
            <TableCell>Apr 25, 2023</TableCell>
            <TableCell>2</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jane Smith</TableCell>
            <TableCell>janesmith@example.com</TableCell>
            <TableCell>098-765-4321</TableCell>
            <TableCell>20:00</TableCell>
            <TableCell>Apr 26, 2023</TableCell>
            <TableCell>4</TableCell>
            <TableCell>
              <Badge variant="default">Inactive</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Alex Johnson</TableCell>
            <TableCell>alexjohnson@example.com</TableCell>
            <TableCell>555-123-4567</TableCell>
            <TableCell>19:30</TableCell>
            <TableCell>Apr 27, 2023</TableCell>
            <TableCell>3</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>johndoe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>18:00</TableCell>
            <TableCell>Apr 25, 2023</TableCell>
            <TableCell>2</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>johndoe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>18:00</TableCell>
            <TableCell>Apr 25, 2023</TableCell>
            <TableCell>2</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>johndoe@example.com</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>18:00</TableCell>
            <TableCell>Apr 25, 2023</TableCell>
            <TableCell>2</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline">Edit</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ReservationsInfo;
