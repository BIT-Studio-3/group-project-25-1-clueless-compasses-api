import prisma from "../client.js";
import bcrypt from "bcryptjs";

const seedUsers = async () => {
  try {
    // Delete existing users to avoid duplicates
    await prisma.user.deleteMany();

    // Sample user data
    const userData = [
      {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "johndoe@example.com",
        password: await bcrypt.hash("password123", 10),
        role: Role.ADMIN, // John is an admin
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        emailAddress: "janesmith@example.com",
        password: await bcrypt.hash("password123", 10),
        role: Role.BASIC, // Jane is a regular user
      },
      {
        firstName: "Super",
        lastName: "Admin",
        emailAddress: "superadmin@example.com",
        password: await bcrypt.hash("password123", 10),
        role: Role.SUPER_ADMIN, // Super Admin role
      },
    ];

    // Insert users
    await prisma.user.createMany({
      data: userData,
      skipDuplicates: true, // Prevent duplicates
    });

    console.log("Users successfully seeded");
  } catch (err) {
    console.log("Seeding users failed:", err.message);
  }
};

seedUsers();
