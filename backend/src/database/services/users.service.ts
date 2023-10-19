import UsersModel, { UsersAtributes, UsersCreationalAtributes } from '../models/users.model';

class UsersService {
  public static async create(user: UsersCreationalAtributes): Promise<UsersAtributes> {
    const newUser = await UsersModel.create(user);
    return newUser.toJSON();
  }

  public static async findEmail(email: string): Promise<UsersAtributes | null > {
    const user = await UsersModel.findOne({ where: { email } });
    return user;
  }
}

export default UsersService;
