import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="flex h-16 w-full items-center border-b border-gray-200 shrink-0 px-4 md:px-6">
      <Link className="text-lg font-bold mr-6" href="#">
        QuickBites
      </Link>
      <div className="flex-1" />
      <Link href="/home">
        <Button className="h-10 w-20 mr-2 text-xs" size="sm" variant="outline">
          Reservations
        </Button>
      </Link>
      <Link href="/home/menu">
        <Button className="h-10 w-20 text-xs" size="sm" variant="outline">
          Menu
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
