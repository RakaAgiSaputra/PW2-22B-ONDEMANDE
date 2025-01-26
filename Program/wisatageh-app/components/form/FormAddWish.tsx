"use client";

import { addWishlist } from "@/utils/actions"; // Import Server Action
import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function FormAddWish() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      // Panggil Server Action dan tangkap pesan status
      const result = await addWishlist(formData);

      console.log("Server response:", result); // Tambahkan logging untuk debuggin

      const messageSuccess =
        typeof result.message === "string"
          ? result.message
          : JSON.stringify(result.message);
      const messageError =
        typeof result.message === "string"
          ? result.message
          : JSON.stringify(result.message); // Pesan error (pastikan selalu string)

      // Tampilkan SweetAlert berdasarkan hasil
      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: messageSuccess,
          confirmButtonColor: "#6B46C1", // Warna tombol
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: messageError,
          confirmButtonColor: "#E53E3E", // Warna tombol
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error); // Logging error untuk debugging
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again.",
        confirmButtonColor: "#E53E3E",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 w-full gap-x-4 gap-y-4 mt-5">
        <div>
          <Label htmlFor="destinations" className="text-sm font-medium">
            Destinations
          </Label>
          <Input
            id="destinations"
            name="destinations"
            type="text"
            placeholder="Enter destinations name"
            className="w-full"
            required
          />
        </div>
        <div>
          <Label htmlFor="address" className="text-sm font-medium">
            Address
          </Label>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Enter address name"
            className="w-full"
            required
          />
        </div>
        <div>
          <Label htmlFor="ratings" className="text-sm font-medium">
            Ratings
          </Label>
          <Input
            id="ratings"
            name="ratings"
            type="number"
            placeholder="Enter ratings (1-5)"
            className="w-full"
            min={1}
            max={5}
            required
          />
        </div>
        <div>
          <Label htmlFor="plan" className="text-sm font-medium">
            Plan to Trip
          </Label>
          <Input
            id="plan"
            name="plan"
            type="text"
            placeholder="Enter plan name"
            className="w-full"
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        variant="default"
        className="bg-primaryColor hover:bg-purple-700 mt-4"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Add Wishlist"}
      </Button>
    </form>
  );
}

export default FormAddWish;
