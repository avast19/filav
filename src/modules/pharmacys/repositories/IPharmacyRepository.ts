import ICreatePharmacyDTO from '../dtos/ICreatePharmacyDTO'
import Pharmacy from '../infra/typeorm/entities/Pharmacy'

export default interface IPharmacyRepository {
  create(data: ICreatePharmacyDTO): Promise<Pharmacy>
  findById(id: string): Promise<Pharmacy | undefined>
  findAll(): Promise<Pharmacy[] | undefined>
  findByName(name: string): Promise<Pharmacy | undefined>
  save(pharmacy: Pharmacy): Promise<Pharmacy>
  delete(id: string): Promise<Pharmacy>
}
