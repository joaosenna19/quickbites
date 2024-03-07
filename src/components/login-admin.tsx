import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginAdmin = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md w-[400px] mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Enter your email</h2>
      <p className="text-sm text-gray-600 mb-6">
        Enter the email associated with your QuickBites account, social login or
        new email. We’ll send a code to that email.
      </p>
      <form className="w-full">
        <div className="flex flex-col space-y-4 mb-4">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <Input id="email" placeholder="Email" type="email" />
        </div>
        <div className="flex flex-col">
          <Button className="bg-green-500  mb-4">Continue</Button>
          <Button>Create new account</Button>
        </div>
      </form>
    </div>
  );
};
export default LoginAdmin;
