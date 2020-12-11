import { container } from 'tsyringe'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'

import IAdministratorRepository from '@modules/administrators/repositories/IAdministratorRepository'
import AdministratorRepository from '@modules/administrators/infra/typeorm/repositories/AdministratorRepository'

import IPharmacyRepository from '@modules/pharmacys/repositories/IPharmacyRepository'
import PharmacyRepository from '@modules/pharmacys/infra/typeorm/repositories/PharmacyRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<IAdministratorRepository>(
  'AdministratorRepository',
  AdministratorRepository,
)

container.registerSingleton<IPharmacyRepository>(
  'PharmacyRepository',
  PharmacyRepository,
)
