import IPharmacyRepository from '../repositories/IPharmacyRepository'
import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import Pharmacy from '../infra/typeorm/entities/Pharmacy'

@injectable()
class IndexPharmacy {
  constructor(
    @inject('PharmacyRepository')
    private pharmacyRepository: IPharmacyRepository,
  ) {}

  public async execute(): Promise<Pharmacy[]> {
    const pharmacy = await this.pharmacyRepository.findAll()

    if (!pharmacy) {
      throw new AppError('Essa farmácia não existe')
    }

    return pharmacy
  }
}

export default IndexPharmacy
