import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const ToastReservation = () => {
  const { toast } = useToast();
  return (
    <Button
      className="bg-green-500 hover:bg-green-600 w-full"
      onClick={() => {
        toast({
          title: "Sucessfully reserved!",
          description: "Friday, February 10, 2023 at 7:00 PM",
        });
      }}
    >
      Reserve
    </Button>
  );
};

export default ToastReservation;
