// src/dtos/UserDTO.js
export default class UserDTO {
    constructor(user) {
      this.id = user._id;
      this.email = user.email;
      this.role = user.role;
      this.name = user.first_name;
    }
  }
  
  // src/controllers/user.controller.js
  import UserDTO from '../dtos/UserDTO.js';
  
  export const getCurrentUser = (req, res) => {
    const userDTO = new UserDTO(req.user);
    res.json(userDTO);
  };
  