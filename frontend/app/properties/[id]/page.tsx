import { ReservationSidebar } from "@/components/property/ReservationSidebar";
import Image from "next/image";

export default function PropertyDetails() {
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
        <Image
          src="/beach_1.jpg"
          fill
          alt="Beach Img"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 py-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>

          <span className="mb-6 block text-lg text-gray-600 ">
            {" "}
            4 guest - 2 bedroom - 1 bathroom
          </span>

          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full "
              alt="The user profile pic"
            />

            <p>
              <strong>John Doe</strong> is your host
            </p>
          </div>

          <hr />

          <div className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quae porro at quod assumenda, nisi non vel reiciendis perferendis
            odio?
          </div>
        </div>

        <ReservationSidebar />
      </div>
    </div>
  );
}
