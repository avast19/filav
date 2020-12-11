import IAdministratorRepository from '../repositories/IAdministratorRepository'
import { injectable, inject } from 'tsyringe'
import IUpdateAdministratorDTO from '../dtos/IUpdateAdministratorDTO'
import Administrator from '../infra/typeorm/entities/Administrator'
import AppError from '@shared/errors/AppError'

@injectable()
class UpdateAdministrator {
  constructor(
    @inject('AdministratorRepository')
    private administratorRepository: IAdministratorRepository,
  ) {}

  public async execute({
    id,
    full_name,
    email,
  }: IUpdateAdministratorDTO): Promise<Administrator> {
    const administrator = await this.administratorRepository.findById(id)

    if (!administrator) {
      throw new AppError('Esse administrador não existe')
    }

    administrator.email = email
    administrator.full_name = full_name

    return this.administratorRepository.save(administrator)
  }
}

export default UpdateAdministrator
