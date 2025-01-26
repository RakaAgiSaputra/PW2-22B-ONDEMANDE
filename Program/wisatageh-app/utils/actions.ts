"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addWishlist(data: FormData) {
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
export async function getallData() {
  try {
    const properties = await prisma.wishlist.findMany({
      select: {
        id: true,
        destinations: true, // Properti ini harus ada di model Prisma
        address: true,
        ratings: true,
        plan: true,
      },
    });

    return properties;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}


export async function deleteProperty({
  id,
}: {
  id: string; // id dari parameter adalah string
}) {
  try {
    // Konversi id dari string ke number
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      throw new Error("ID tidak valid. ID harus berupa angka.");
    }

    // Menghapus properti berdasarkan ID
    const property = await prisma.wishlist.deleteMany({
      where: {
        id: numericId,
      },
    });

    // Jika count lebih besar dari 0, berarti ada properti yang berhasil dihapus
    revalidatePath("/wishlist");
    if (property.count > 0) {
      return { success: true }; // Penghapusan berhasil
    }
    return { success: false }; // Tidak ada properti yang dihapus
  } catch (error) {
    console.error(error);
    revalidatePath("/wishlist");
    return { success: false }; // Gagal menghapus properti
  }
}
