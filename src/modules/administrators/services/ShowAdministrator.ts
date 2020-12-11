import IAdministratorRepository from '../repositories/IAdministratorRepository'
import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import Administrator from '../infra/typeorm/entities/Administrator'

@injectable()
class ShowAdministrator {
  constructor(
    @inject('AdministratorRepository')
    private administratorRepository: IAdministratorRepository,
  ) {}

  public async execute({ id }: { id: string }): Promise<Administrator> {
    const administrator = await this.administratorRepository.findById(id)

    if (!administrator) {
      throw new AppError('Esse administrador não existe')
    }

    return administrator
  }
}

export default ShowAdministrator
