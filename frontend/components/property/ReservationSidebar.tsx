import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function ReservationSidebar() {
  return (
    <aside className="p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h1 className="mb-5 text-2xl">Rs 1000 per night</h1>

      <div className="mb-6">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="slfn" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel className="mb-2">Guests</SelectLabel>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full mb-6 py-6 text-center rounded-xl">
        Book Now
      </Button>

      <div className="mb-4 flex justify-between items-center">
        <p>Rs 1000 * 4</p>
        <p>Rs 4000</p>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <p>Booking fee</p>

        <p>Rs 400</p>
      </div>

      <hr />

      <div className="mb-4 flex justify-between items-center font-bold py-1">
        <p>Total</p>

        <p>Rs 4400</p>
      </div>
    </aside>
  );
}
