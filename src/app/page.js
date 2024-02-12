import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <section className="max-w-[1470px] w-full mx-auto pt-8 relative">
      <div className="flex gap-8">
        <div className="max-w-[300px] w-full sticky top-5 z-10">
          <LeftSidebar />
        </div>
        <div className="w-full bg-base-100 p-6">

        </div>
        <div className="max-w-[88px] w-full sticky z-10 top-5">
          <RightSidebar />
        </div>
      </div>
    </section>
  )
}
