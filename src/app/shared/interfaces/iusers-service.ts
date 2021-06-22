import { User } from './user';

export interface IUsersService {
  registerUser(newUser: User): Promise<void>;
  getUserDetails(user: string): Promise<User>;
  updateUser(userId: string, updatedUser: User): Promise<void>;
}
