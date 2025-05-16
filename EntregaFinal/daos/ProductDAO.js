// src/daos/ProductDAO.js
export default class ProductDAO {
    constructor(model) {
      this.model = model;
    }
  
    async getAll() { return this.model.find(); }
    async getById(id) { return this.model.findById(id); }
    async create(data) { return this.model.create(data); }
    async update(id, data) { return this.model.findByIdAndUpdate(id, data); }
    async delete(id) { return this.model.findByIdAndDelete(id); }
  }
  