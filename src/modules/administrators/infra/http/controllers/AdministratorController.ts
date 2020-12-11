import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateAdministrator from '@modules/administrators/services/CreateAdministrator'
import DeleteAdministrator from '@modules/administrators/services/DeleteAdministrator'
import UpdateAdministrator from '@modules/administrators/services/UpdateAdministrator'
import ShowAdministrator from '@modules/administrators/services/ShowAdministrator'
import IndexAdministrator from '@modules/administrators/services/IndexAdministrator'
import { classToClass } from 'class-transformer'

export default class AdministratorController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.body

    const showAdmin = container.resolve(ShowAdministrator)

    const administrator = await showAdmin.execute({ id })

    return res.json(classToClass(administrator))
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const indexAdmin = container.resolve(IndexAdministrator)

    const administrators = await indexAdmin.execute()

    return res.json(classToClass(administrators))
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { full_name, password, email } = req.body

    const createAdmin = container.resolve(CreateAdministrator)

    const administrator = await createAdmin.execute({
      full_name,
      password,
      email,
    })

    return res.json(classToClass(administrator))
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { full_name, email, id } = req.body

    const updateAdmin = container.resolve(UpdateAdministrator)

    const administrator = await updateAdmin.execute({
      id,
      full_name,
      email,
    })

    return res.json(classToClass(administrator))
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body

    const deleteAdmin = container.resolve(DeleteAdministrator)

    await deleteAdmin.execute({ id })

    return res.send()
  }
}
