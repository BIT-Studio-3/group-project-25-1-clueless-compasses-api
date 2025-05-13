import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/client.js";

const login = async (req, res) => {
  const { emailAddress, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { emailAddress } });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare the password with the hashed password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign(
      { userId: user.id, emailAddress: user.emailAddress },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export { login };