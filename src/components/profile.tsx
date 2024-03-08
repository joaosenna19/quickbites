import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <div className="font-semibold">Alice Chu</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                alice.chu@acme.inc
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form className="grid gap-6">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input defaultValue="Alice Chu" id="name" readOnly />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="position">Position</Label>
            <Input id="position" placeholder="CEO" readOnly />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input defaultValue="alice.chu@acme.inc" id="email" readOnly />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="avatar">Avatar</Label>
            <Input
              accept="image/*"
              className="!p-0 !m-0 !border-0 !shadow-none !ring-0 !ring-offset-0"
              disabled
              id="avatar"
              type="file"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="p-6">
        <Button size="sm">Edit Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;
