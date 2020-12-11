import IAdministratorRepository from '../repositories/IAdministratorRepository'
import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import Administrator from '../infra/typeorm/entities/Administrator'

@injectable()
class IndexAdministrator {
  constructor(
    @inject('AdministratorRepository')
    private administratorRepository: IAdministratorRepository,
  ) {}

  public async execute(): Promise<Administrator[]> {
    const administrator = await this.administratorRepository.findAll()

    if (!administrator) {
      throw new AppError('Esse administrador não existe')
    }

    return administrator
  }
}

export default IndexAdministrator
