import { LoginButton } from "@/components/login-button/login-button";
import { LoosList } from "@/components/loos-list/loos-list";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="flex flex-row items-center justify-between h-full">
      <div className="flex flex-col items-center w-full">
        Home page
        <LoginButton />
      </div>
      <Image
        src={
          "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt={"welome img"}
        width={500}
        height={667}
      />
    </main>
  );
}

export default Home;
