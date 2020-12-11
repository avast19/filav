import { getRepository, Repository } from 'typeorm'
import AppError from '@shared/errors/AppError'

import IPharmacyRepository from '@modules/pharmacys/repositories/IPharmacyRepository'

import Pharmacy from '../entities/Pharmacy'
import ICreatePharmacyDTO from '@modules/pharmacys/dtos/ICreatePharmacyDTO'

class PharmacyRepository implements IPharmacyRepository {
  private ormRepository: Repository<Pharmacy>

  constructor() {
    this.ormRepository = getRepository(Pharmacy)
  }

  public async create(pharmacyData: ICreatePharmacyDTO): Promise<Pharmacy> {
    const pharmacy = this.ormRepository.create(pharmacyData)

    await this.ormRepository.save(pharmacy)

    return pharmacy
  }

  public async findAll(): Promise<Pharmacy[] | undefined> {
    const pharmacys = await this.ormRepository.find()

    return pharmacys
  }

  public async findById(id: string): Promise<Pharmacy | undefined> {
    const pharmacy = await this.ormRepository.findOne({
      where: { id },
    })

    if (!pharmacy) {
      throw new AppError('Essa farmácia não existe')
    }

    return pharmacy
  }

  public async findByName(name: string): Promise<Pharmacy | undefined> {
    const pharmacy = await this.ormRepository.findOne({
      where: { name },
    })

    return pharmacy
  }

  public async save(pharmacy: Pharmacy): Promise<Pharmacy> {
    return this.ormRepository.save(pharmacy)
  }

  public async delete(id: string): Promise<Pharmacy> {
    const pharmacy = await this.ormRepository.findOne({
      where: { id },
    })

    if (!pharmacy) {
      throw new AppError('Essa farmácia não existe')
    }

    return this.ormRepository.remove(pharmacy)
  }
}

export default PharmacyRepository
