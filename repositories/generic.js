import prisma from '../prisma/client.js';

class GenericRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await prisma[this.model].create({ data });
  }

  async findAll(select = {}, filters = {}, sortBy = "id", sortOrder = "asc") {
    // Create an empty query object
    const query = {
      orderBy: {
        [sortBy]: sortOrder, // Sort by the specified column and order
      },
    };
  
    query.select = select;
    
    if (Object.keys(filters).length > 0) {
      query.where = {};
      // Loop through the filters and apply them dynamically
      for (const [key, value] of Object.entries(filters)) {
        if (value) {
          query.where[key] = { contains: value };
        }
      }
    }
  
    return await prisma[this.model].findMany(query);
  }

  async findById(id) {
    return await prisma[this.model].findUnique({
      where: { id },
    });
  }

  async update(id, data) {
    return await prisma[this.model].update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma[this.model].delete({
      where: { id },
    });
  }
}

export default GenericRepository;
