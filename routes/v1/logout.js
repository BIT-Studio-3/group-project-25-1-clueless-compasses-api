import express from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma/client.js'; // Your Prisma client import

const router = express.Router();

// Logout route to invalidate the JWT token
router.post('/logout', async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify token and decode its payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add the token to the blacklist (store it in the database)
    await prisma.blacklist.create({
      data: {
        token: token,
      },
    });

    return res.status(200).json({ message: 'Successfully logged out' });
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }
});

export default router;
