import IPharmacyRepository from '../repositories/IPharmacyRepository'
import { injectable, inject } from 'tsyringe'
import AppError from '@shared/errors/AppError'

@injectable()
class DeletePharmacy {
  constructor(
    @inject('PharmacyRepository')
    private pharmacyRepository: IPharmacyRepository,
  ) {}

  public async execute({ id }: { id: string }): Promise<void> {
    const pharmacy = await this.pharmacyRepository.findById(id)

    if (!pharmacy) {
      throw new AppError('Essa farmácia não existe')
    }

    this.pharmacyRepository.delete(id)
  }
}

export default DeletePharmacy
