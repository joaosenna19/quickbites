import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AsideNavbar = () => {
  const linkClasses =
    "flex items-center space-x-2 text-black hover:bg-blue-300 p-2 rounded-md";
  return (
    <nav className="p-4 w-48 h-screen flex flex-col justify-begin border block">
      <div className="flex justify-center">
        <Avatar>
          <AvatarImage
            alt="Profile"
            src="/placeholder.svg?height=40&width=40"
          />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-center mb-6">
        <Link href="/admin">
          <span className="text-xs justify-center">Log out</span>
        </Link>
      </div>
      <ul className="space-y-6">
        <li>
          <Link className={linkClasses} href="/admin/manager/profile">
            <UserIcon />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link className={linkClasses} href="/admin/manager/reservations">
            <CalendarIcon />
            <span>Reservations</span>
          </Link>
        </li>
        <li>
          <Link className={linkClasses} href="/admin/manager/waiters">
            <UsersIcon />
            <span>Waiters</span>
          </Link>
        </li>
        <li>
          <Link className={linkClasses} href="/admin/manager/tables">
            <LayoutIcon />
            <span>Tables</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AsideNavbar;

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function LayoutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
