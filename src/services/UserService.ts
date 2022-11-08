import IUser from '../interfaces/User';
import Users from '../database/models/User';

class UserService {

  public getAll = async (): Promise<IUser[] | null> => {
    const user = await Users.findAll();
    return user;
  };

  public getByEmail = async (email: string ): Promise<IUser | null> => {
    const user = await Users.findOne({ where: { email } });
    return user;
  };
}

export default UserService;
