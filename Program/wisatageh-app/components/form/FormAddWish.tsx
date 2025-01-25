import { Input } from "../ui/input";
import { Label } from "../ui/label";

function FormAddWish() {
  return (
    <form action={""}>
      <div className="grid grid-cols-2 w-full gap-x-4 gap-y-4 mt-5">
        <div>
          <Label htmlFor="destinations" className="text-sm font-medium">
            Destinations
          </Label>
          <Input
            id="destinations"
            type="text"
            placeholder="Enter destinations name"
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="address" className="text-sm font-medium">
            Address
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="Enter address name"
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="ratings" className="text-sm font-medium">
            Ratings
          </Label>
          <Input
            id="ratings"
            type="text"
            placeholder="Enter ratings name"
            className="w-full"
          />
        </div>

        <div>

        <Label htmlFor="plan" className="text-sm font-medium">
          Plan to Trip
        </Label>
        <Input
          id="plan"
          type="text"
          placeholder="Enter plan name"
          className="w-full"
          />
          </div>
      </div>
    </form>
  );
}

export default FormAddWish;
