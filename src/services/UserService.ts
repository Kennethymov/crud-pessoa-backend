import IUser, { IUserUpdate } from '../interfaces/User';
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
    const { name, email, birthDate } = user;
    const newUser = await Users.create({ name, email, birthDate });
    return newUser;
  };

  public update = async (id: number, dataUser:IUserUpdate):Promise<IUser | null> => {
    const { name, email, birthDate } = dataUser;
    await Users.update({ name, email, birthDate }, { where: { id } });
    const user = await this.getById(id);
    return user;
  };

  public remove = async (id: number):Promise<void> => {
    await Users.destroy({ where: { id } });
  };

  public getByEmail = async (email: string ): Promise<IUser | null> => {
    const user = await Users.findOne({ where: { email } });
    return user;
  };
}

export default UserService;
