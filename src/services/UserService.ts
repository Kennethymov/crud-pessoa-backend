import IUser from '../interfaces/User';
import Users from '../database/models/User';

class UserService {

  public getAll = async (): Promise<IUser[] | null> => {
    const user = await Users.findAll();
    return user;
  };

  public getById = async (id: number ): Promise<IUser | null> => {
    const user = await Users.findOne({ where: { id } });
    return user;
  };
  public create = async (user:IUser):Promise<IUser | null> => {
    const {name, email, birthDate} = user;
    const newUser = await Users.create({name, email, birthDate});
    return newUser;
  };
}

export default UserService;
