import AsideNavbar from "@/components/aside-navbar";
import Footer from "@/components/footer";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <AsideNavbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto m-auto">
        <div className="flex justify-center items-center ">{children}</div>
      </div>
    </div>
  );
}
