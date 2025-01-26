import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";
import ButtonDeleteItem from "./ButtonDelete";

import { getallData } from "@/utils/actions";

export async function TableWishList() {
  const properties = await getallData();

  if (properties.length === 0) {
    return (
      <div className="flex justify-center items-center w-full">
        Items kosong
      </div>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Destinations</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Ratings</TableHead>
          <TableHead className="text-right">Plan Trip</TableHead>
          <TableHead className="text-white text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((properties, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              {properties.destinations}
            </TableCell>
            <TableCell>{properties.address}</TableCell>
            <TableCell>{properties.ratings}</TableCell>
            <TableCell className="text-right">{properties.plan}</TableCell>
            <TableCell className="text-center">
              <div className="flex gap-2 justify-center">
                {/* Button untuk Edit */}

                {/* Button untuk Delete */}
                <ButtonDeleteItem
                  id={properties.id.toString()}
                  className="bg-red-500 hover:bg-red-400"
                >
                  <MdDelete className="w-6 h-6" />
                </ButtonDeleteItem>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
