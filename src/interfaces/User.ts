interface IUser {
  id?: number
  name: string;
  email: string;
  birthDate: string;
}

interface IUserUpdate {
  name?: string;
  email?: string;
  birthDate?: string;
}

export default IUser;
export { IUserUpdate };
