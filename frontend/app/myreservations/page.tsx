import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MyReservations() {
  return (
    <div className="max-w-[1500px] mx-auto px-6">
      <div className="pt-6 pb-2">
        <h1 className="my-6 text-2xl">My reservations</h1>

        <div className="space-y-4 mb-6 ">
          <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src="/beach_1.jpg"
                  fill
                  className="hover:scale-110 object-cover transition h-full w-full"
                  alt="Beach House"
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 space-y-2">
              <h2 className="mb-4 text-4xl">Property name</h2>

              <p>
                <strong>Check in data</strong> 01/10/2024
              </p>
              <p>
                <strong>Check out data</strong> 03/10/2024
              </p>
              <p>
                <strong>Number of night</strong> 2
              </p>
              <p>
                <strong>Total price</strong> Rs 2000
              </p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
            <div className="col-span-1">
              <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                  src="/beach_1.jpg"
                  fill
                  className="hover:scale-110 object-cover transition h-full w-full"
                  alt="Beach House"
                />
              </div>
            </div>

            <div className="col-span-3 space-y-2">
              <h2 className="mb-4 text-4xl">Property name</h2>

              <p>
                <strong>Check in data</strong> 01/10/2024
              </p>
              <p>
                <strong>Check out data</strong> 03/10/2024
              </p>
              <p>
                <strong>Number of night</strong> 2
              </p>
              <p>
                <strong>Total price</strong> Rs 2000
              </p>

              <Button>Go to Property</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
