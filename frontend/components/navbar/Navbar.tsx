import Image from "next/image";
import Logo from "@/public/logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { SearchFilter } from "./SearchFilters";
import UserNav from "./Usernav";

export function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6 ">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <Image src={Logo} alt="Brand Logo" className="size-14" />
          </Link>

          <div className=" flex space-x-6">
            <SearchFilter />
          </div>

          <div className="flex items-center justify-between space-x-6">
            <div>
              <Button className="rounded-full" variant={"ghost"}>
                Your Home
              </Button>
            </div>

            <div>
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
