

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MakeReservation from "./make-reservation"
import EditReservation from "./edit-reservation"

export function ReservationForm() {
  return (
    
    <Tabs className="bg-white p-4 rounded-lg shadow max-w-sm mx-auto my-8" defaultValue="reservation">
    <TabsList className="grid w-full grid-cols-2 mb-4">
      <TabsTrigger value="reservation">Make a reservation</TabsTrigger>
      <TabsTrigger value="edit">Edit a reservation</TabsTrigger>
    </TabsList>
    <TabsContent value="reservation">
    <MakeReservation/>
    </TabsContent>
    <TabsContent value="edit">
      <EditReservation/>
    </TabsContent>
  </Tabs>

  )
}



