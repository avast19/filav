import IPharmacyRepository from '../repositories/IPharmacyRepository'
import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'
import Pharmacy from '../infra/typeorm/entities/Pharmacy'

@injectable()
class ShowPharmacy {
  constructor(
    @inject('PharmacyRepository')
    private pharmacyRepository: IPharmacyRepository,
  ) {}

  public async execute({ id }: { id: string }): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.findById(id)

    if (!pharmacy) {
      throw new AppError('Esse administrador não existe')
    }

    return pharmacy
  }
}

export default ShowPharmacy
