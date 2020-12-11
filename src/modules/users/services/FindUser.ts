import IUserRepository from '../repositories/IUserRepository'
import User from '../infra/typeorm/entities/User'
import { injectable, inject } from 'tsyringe'

interface IRequest {
  id: string
}

@injectable()
class FindUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<User | undefined> {
    const user = this.userRepository.findById(id)

    return user
  }
}

export default FindUser
