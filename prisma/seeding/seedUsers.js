import pkg from '@prisma/client';
import bcrypt from 'bcrypt';

const { PrismaClient, Role } = pkg;

const prisma = new PrismaClient();

const seedUsers = async () => {
  try {
    // Delete existing users to avoid duplicates
    await prisma.user.deleteMany();

    // Sample user data with roles
    const userData = [
      {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "admin@example.com",
        password: await bcrypt.hash("password123", 10),
        role: Role.ADMIN, // John is an admin
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        emailAddress: "basic@example.com",
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

    // Insert users with roles
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
