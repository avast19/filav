import { getRepository, Repository } from 'typeorm'
import AppError from '@shared/errors/AppError'

import IAdministratorRepository from '@modules/administrators/repositories/IAdministratorRepository'

import Administrator from '../entities/Administrator'
import ICreateAdministratorDTO from '@modules/administrators/dtos/ICreateAdministratorDTO'

class AdministratorRepository implements IAdministratorRepository {
  private ormRepository: Repository<Administrator>

  constructor() {
    this.ormRepository = getRepository(Administrator)
  }

  public async create(
    administratorData: ICreateAdministratorDTO,
  ): Promise<Administrator> {
    const administrator = this.ormRepository.create(administratorData)

    await this.ormRepository.save(administrator)

    return administrator
  }

  public async findAll(): Promise<Administrator[] | undefined> {
    const administrators = await this.ormRepository.find()

    return administrators
  }

  public async findById(id: string): Promise<Administrator | undefined> {
    const administrator = await this.ormRepository.findOne({
      where: { id },
    })

    if (!administrator) {
      throw new AppError('Esse administrador não existe')
    }

    return administrator
  }

  public async findByEmail(email: string): Promise<Administrator | undefined> {
    const administrator = await this.ormRepository.findOne({
      where: { email },
    })

    return administrator
  }

  public async save(administrator: Administrator): Promise<Administrator> {
    return this.ormRepository.save(administrator)
  }

  public async delete(id: string): Promise<Administrator> {
    const administrator = await this.ormRepository.findOne({
      where: { id },
    })

    if (!administrator) {
      throw new AppError('Esse administrador não existe')
    }

    return this.ormRepository.remove(administrator)
  }
}

export default AdministratorRepository
