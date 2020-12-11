import ICreateAdministratorDTO from '../dtos/ICreateAdministratorDTO'
import Administrator from '../infra/typeorm/entities/Administrator'

export default interface IAdministratorRepository {
  create(data: ICreateAdministratorDTO): Promise<Administrator>
  findById(id: string): Promise<Administrator | undefined>
  findAll(): Promise<Administrator[] | undefined>
  findByEmail(email: string): Promise<Administrator | undefined>
  save(administrator: Administrator): Promise<Administrator>
  delete(id: string): Promise<Administrator>
}
