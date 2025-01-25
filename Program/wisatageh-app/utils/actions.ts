"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addWishlist(data: FormData) {
  const prisma = new PrismaClient();
  try {
    const destinations = data.get("destinations") as string;
    const address = data.get("address") as string;
    const ratings = parseInt(data.get("ratings") as string, 10);
    const plan = data.get("plan") as string;

    // Validasi data
    if (!destinations || !address || !ratings || !plan) {
      throw new Error("All fields are required.");
    }

    // Simpan data ke database
    await prisma.wishlist.create({
      data: {
        destinations,
        address,
        ratings,
        plan,
      },
    });

    // Kembalikan pesan sukses
    revalidatePath("/");
    return { success: true, message: "Wishlist has been added successfully!" };
  } catch (error: any) {
    console.error("Error adding wishlist:", error);
    return {
      success: false,
      message: error.message || "Failed to add wishlist.",
    };
  } finally {
    await prisma.$disconnect();
  }
}
