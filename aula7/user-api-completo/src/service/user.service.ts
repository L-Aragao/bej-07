import UserDTO from "../dto/user.dto";
import UserRepository from "../repository/user.repository";
import { connection } from "../repository/connection";

class UserService {
    userEntity: UserRepository;

    constructor() {
        this.userEntity = new UserRepository(connection);
    }

    async create(newUser: UserDTO): Promise<UserDTO[]> {
        const user = await this.userEntity.create(newUser);
        return [user];
    }

    async findByDocument(document: string): Promise<UserDTO[]> {
        const user = await this.userEntity.findByDocument(document);
        return user;
    }

    async findAll(): Promise<UserDTO[]> {
        const users = await this.userEntity.findAll();
        return users;
    }

    async updateByDocument(document: string, userUpdated: UserDTO): Promise<UserDTO[]> {
        const users = await this.userEntity.updateByDocument(document, userUpdated);
        return users;
    }


}

export default UserService;