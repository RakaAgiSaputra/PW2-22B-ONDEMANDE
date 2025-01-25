"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import FormAddWish from "@/components/form/FormAddWish";

function ButtonCreateWishlist() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* Button */}
      <Button
        variant="default"
        className="bg-primaryColor hover:bg-purple-700"
        onClick={handleButtonClick}
      >
        Create Wishlist
      </Button>

      {/* Form */}
      {showForm && (
         <FormAddWish/>
      )}
    </div>
  );
}

export default ButtonCreateWishlist;
