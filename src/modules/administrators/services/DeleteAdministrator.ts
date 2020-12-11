import IAdministratorRepository from '../repositories/IAdministratorRepository'
import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'

@injectable()
class DeleteAdministrator {
  constructor(
    @inject('AdministratorRepository')
    private administratorRepository: IAdministratorRepository,
  ) {}

  public async execute({ id }: { id: string }): Promise<void> {
    const administrator = await this.administratorRepository.findById(id)

    if (!administrator) {
      throw new AppError('Esse administrador não existe')
    }

    this.administratorRepository.delete(id)
  }
}

export default DeleteAdministrator
