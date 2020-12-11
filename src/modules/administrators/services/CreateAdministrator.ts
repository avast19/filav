import Administrator from '../infra/typeorm/entities/Administrator'
import IAdministratorRepository from '../repositories/IAdministratorRepository'
import AppError from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import ICreateAdministratorDTO from '../dtos/ICreateAdministratorDTO'
import { hash } from 'bcryptjs'

@injectable()
class CreateAdministrator {
  constructor(
    @inject('AdministratorRepository')
    private administratorRepository: IAdministratorRepository,
  ) {}

  public async execute({
    full_name,
    email,
    password,
  }: ICreateAdministratorDTO): Promise<Administrator> {
    const checkAdministratorExists = await this.administratorRepository.findByEmail(
      email,
    )

    if (checkAdministratorExists)
      throw new AppError('Este e-mail já está sendo usado')

    const hashedPassword = await hash(password, 8)

    const administrator = await this.administratorRepository.create({
      full_name,
      email,
      password: hashedPassword,
    })

    return administrator
  }
}

export default CreateAdministrator
