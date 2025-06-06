/**
 * @file Manages all operations related to users
 * @author Clueless Compassess Studio 3 Group
 */

import GenericRepository from '../../repositories/generic.js';

const userRepository = new GenericRepository('user');

const returnData = {
  id: true,
  firstName: true,
  lastName: true,
  emailAddress: true,
  createdAt: true,
  updatedAt: true
}

const createUser = async (req, res) => {
  // Try/catch blocks are used to handle exceptions
  try {
    await userRepository.create(req.body);
    const newUsers = await userRepository.findAll(returnData);

    // Send a JSON response
    return res.status(201).json({
      message: "User successfully created",
      data: newUsers,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add the following code under the create User function
const getUsers = async (req, res) => {
  try {
    // Extract filters from the query parameters
    const filters = {
      firstName: req.query.firstName || undefined,
      lastName: req.query.lastName || undefined,
      emailAddress: req.query.emailAddress || undefined,
    };

    // Extract the sortBy and sortOrder parameters from the query
    const sortBy = req.query.sortBy || "id";
    const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

    // Retrieve users based on the filters, sorted by the specified column and order
    const users = await userRepository.findAll(returnData, filters, sortBy, sortOrder);

    // Check if there are no users
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json({
      //Shows "no data" when database is empty
      msg: users.length === 0 ? "No data" : ",",
      //Shows count when database is empty
      // count: users.length === 0 ? 0: users.count() ,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add the following code under the get Users function
const getUser = async (req, res) => {
  try {
    const user = await userRepository.findById(req.params.id);

    // Check if there is no user
    if (!user) {
      return res.status(404).json({
        message: `No user with the id: ${req.params.id} found`,
      });
    }

    return res.status(200).json({
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add the following code under the getUser function
const updateUser = async (req, res) => {
  try {
    // Find the user by id
    let user = await userRepository.findById(req.params.id);

    // Check if there is no user
    if (!user) {
      return res.status(404).json({
        message: `No user with the id: ${req.params.id} found`,
      });
    }

    // Update the user
    users = await userRepository.update(req.params.id, req.body);

    return res.status(200).json({
      message: `User with the id: ${req.params.id} successfully updated`,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add the following code under the update User function
const deleteUser = async (req, res) => {
  try {
    const user = await userRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: `No user with the id: ${req.params.id} found`,
      });
    }
    await userRepository.delete(req.params.id);
    return res.json({
      message: `User with the id: ${req.params.id} successfully deleted`,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// Add the following code under the delete User function
export {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};