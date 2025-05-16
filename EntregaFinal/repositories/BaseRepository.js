// src/repositories/BaseRepository.js
export default class BaseRepository {
    constructor(dao) {
      this.dao = dao;
    }
  
    getAll() {
      return this.dao.getAll();
    }
  
    getById(id) {
      return this.dao.getById(id);
    }
  
    create(data) {
      return this.dao.create(data);
    }
  
    update(id, data) {
      return this.dao.update(id, data);
    }
  
    delete(id) {
      return this.dao.delete(id);
    }
  }
  