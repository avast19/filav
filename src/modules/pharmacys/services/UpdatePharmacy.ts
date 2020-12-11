import IPharmacyRepository from '../repositories/IPharmacyRepository'
import { injectable, inject } from 'tsyringe'
import IUpdatePharmacyDTO from '../dtos/IUpdatePharmacyDTO'
import Pharmacy from '../infra/typeorm/entities/Pharmacy'
import AppError from '@shared/errors/AppError'

@injectable()
class UpdatePharmacy {
  constructor(
    @inject('PharmacyRepository')
    private pharmacyRepository: IPharmacyRepository,
  ) {}

  public async execute({
    id,
    name,
    uf,
    city,
  }: IUpdatePharmacyDTO): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.findById(id)

    if (!pharmacy) {
      throw new AppError('Essa farmácia não existe')
    }

    pharmacy.name = name
    pharmacy.uf = uf
    pharmacy.city = city

    return this.pharmacyRepository.save(pharmacy)
  }
}

export default UpdatePharmacy
