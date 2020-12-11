import { compare } from 'bcryptjs'
import { injectable, inject } from 'tsyringe'
import { sign } from 'jsonwebtoken'
import authConfig from '@config/auth'

import IAdministratorRepository from '@modules/administrators/repositories/IAdministratorRepository'
import AppError from '@shared/errors/AppError'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  token: string
  admin_id: string
}

@injectable()
class AuthenticateAdmin {
  constructor(
    @inject('AdministratorRepository')
    private administratorRepository: IAdministratorRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const admin = await this.administratorRepository.findByEmail(email)

    if (!admin) throw new AppError('E-mail ou senha estão incorretos', 401)

    const passwordMatched = await compare(password, admin.password)

    if (!passwordMatched)
      throw new AppError('E-mail ou senha estão incorretos', 401)

    const { secret, expiresIn } = authConfig.admin

    const token = sign({}, secret, {
      subject: admin.id,
      expiresIn,
    })

    return { token, admin_id: admin.id }
  }
}

export default AuthenticateAdmin
