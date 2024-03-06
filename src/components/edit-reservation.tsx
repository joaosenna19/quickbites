import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const EditReservation = () => {
    return (
    <div className="bg-white p-4 rounded-lg shadow max-w-sm mx-auto mt-8">
    <h2 className="text-2xl font-semibold mb-4">Edit a reservation</h2>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" htmlFor="reservation-code">
        Reservation Code
      </label>
      <Input id="reservation-code" placeholder="Enter reservation code" />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" htmlFor="email">
        Email
      </label>
      <Input id="email" placeholder="Enter email" type="email" />
    </div>
    <Button>Edit</Button>
  </div>);
}

export default EditReservation;