import User from '../infra/typeorm/entities/User'
import IUserRepository from '../repositories/IUserRepository'
import AppError from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import ICreateUserDTO from '../dtos/ICreateUserDTO'

@injectable()
class CreateUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    full_name,
    email,
    birthday_date,
    city,
    phone_number,
    document,
    password,
    external_customer_id,
  }: ICreateUserDTO): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email)

    if (checkUserExists) throw new AppError('Este e-mail já está sendo usado')

    const user = this.userRepository.create({
      full_name,
      email,
      birthday_date,
      phone_number,
      city,
      document,
      password,
      external_customer_id,
    })

    return user
  }
}

export default CreateUser
