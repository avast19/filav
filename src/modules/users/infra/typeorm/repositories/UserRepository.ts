import { getRepository, Repository } from 'typeorm'

import IUserRepository from '@modules/users/repositories/IUserRepository'

import User from '../entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData)

    await this.ormRepository.save(user)

    return user
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    })

    if (!user) {
      throw new Error('Esse usuário não existe')
    }

    return user
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user)
  }
}

export default UserRepository
