import Pharmacy from '../infra/typeorm/entities/Pharmacy'
import IPharmacyRepository from '../repositories/IPharmacyRepository'
import AppError from '@shared/errors/AppError'
import { injectable, inject } from 'tsyringe'
import ICreatePharmacyDTO from '../dtos/ICreatePharmacyDTO'

@injectable()
class CreatePharmacy {
  constructor(
    @inject('PharmacyRepository')
    private pharmacyRepository: IPharmacyRepository,
  ) {}

  public async execute({
    name,
    location,
    city,
    uf,
  }: ICreatePharmacyDTO): Promise<Pharmacy> {
    const checkPharmacyExists = await this.pharmacyRepository.findByName(name)

    if (checkPharmacyExists)
      throw new AppError('Essa farmácia já existe no banco de dados')

    const pharmacy = await this.pharmacyRepository.create({
      name,
      location,
      city,
      uf,
    })

    return pharmacy
  }
}

export default CreatePharmacy
