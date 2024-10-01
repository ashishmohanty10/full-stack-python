import Image from "next/image";
import Beach from "@/public/beach_1.jpg";

export function PropertyListItem() {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl ">
        <Image
          fill
          src={Beach}
          sizes="(max-width:768px) 768px, (max-width:1200px) 768px , 768px"
          alt="Property img"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">Property name</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>Rs 1000</strong> per night
        </p>
      </div>
    </div>
  );
}
