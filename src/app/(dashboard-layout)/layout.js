import DashboardSidebar from "@/components/shared/DashboardSidebar";

export const metadata = {
  title: "Trade Venture",
  description: "This is an official Application",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex gap-5">
        <DashboardSidebar />
        <div className="lg:ml-[350px]"> {children}</div>
      </div>
    </>
  );
}
