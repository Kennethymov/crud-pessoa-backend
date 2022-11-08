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
  public create = async (user:IUser):Promise<IUser | null> => {
    const {name, email, bithDate} = user;
    const newUser = await Users.create({name, email, bithDate});
    return newUser;
  };
}

export default UserService;
