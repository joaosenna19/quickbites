import { SelectItem, SelectContent, Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const MakeReservation = () => {
    return(
        <div>
        <h2 className="text-2xl font-semibold mb-4">Make a reservation</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="first-name">
              First Name
            </label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="last-name">
              Last Name
            </label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="party-size">
            Party Size
          </label>
          <Select>
            <SelectTrigger id="party-size">
              <SelectValue placeholder="2 people" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="1">1 person</SelectItem>
              <SelectItem value="2">2 people</SelectItem>
              <SelectItem value="3">3 people</SelectItem>
              <SelectItem value="4">4 people</SelectItem>
              <SelectItem value="5">5 people</SelectItem>
              <SelectItem value="6">6 people</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="date">
              Date
            </label>
            <Select>
              <SelectTrigger id="date">
                <SelectValue placeholder="Mar 6, 2024" />
              </SelectTrigger>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="time">
              Time
            </label>
            <Select>
              <SelectTrigger id="time">
                <SelectValue placeholder="7:00 p.m." />
              </SelectTrigger>
            </Select>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Select a time</h3>
          <div className="flex flex-wrap gap-2">
            <Button className="bg-gray-200 text-sm">6:30 p.m.*</Button>
            <Button className="bg-gray-200 text-sm">6:45 p.m.*</Button>
            <Button className="bg-gray-200 text-sm">7:00 p.m.*</Button>
            <Button className="bg-gray-200 text-sm">7:15 p.m.*</Button>
            <Button className="bg-gray-200 text-sm">8:00 p.m.*</Button>
          </div>
        </div>
        
        
        <div className="mb-4">
          <label className="flex items-center space-x-2 text-xs">
            <Checkbox id="reminder-email" />
            <span>I want to receive a reminder email for this reservation</span>
          </label>
        </div>
        <Button>Reserve</Button>
      </div>
    )
};

export default MakeReservation;
