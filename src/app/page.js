import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import Main from "@/components/Main/Main";
import RightSidebar from "@/components/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <section className="max-w-[1470px] w-full mx-auto pt-8 relative">
      <div className="flex gap-8">
        <div className="max-w-[300px] w-full sticky top-5 z-10  h-[calc(100vh-2rem)] hidden xl:inline-block">
          <LeftSidebar />
        </div>
        <div className="w-full">
          <Main />
        </div>
        <div className="min-w-[88px] h-[calc(100vh-2rem)] bg-base-100 py-5 rounded-xl scrollbarStyle sticky top-5 mb-10 z-10 hidden xl:inline-block">
          <RightSidebar />
        </div>
      </div>
    </section>
  )
}
