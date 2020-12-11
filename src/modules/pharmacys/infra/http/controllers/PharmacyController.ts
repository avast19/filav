import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreatePharmacy from '@modules/pharmacys/services/CreatePharmacy'
import DeletePharmacy from '@modules/pharmacys/services/DeletePharmacy'
import UpdatePharmacy from '@modules/pharmacys/services/UpdatePharmacy'
import ShowPharmacy from '@modules/pharmacys/services/ShowPharmacy'
import IndexPharmacy from '@modules/pharmacys/services/IndexPharmacy'

export default class PharmacyController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const showPharma = container.resolve(ShowPharmacy)

    const pharmacy = await showPharma.execute({ id })

    return res.json(pharmacy)
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const indexPharma = container.resolve(IndexPharmacy)

    const pharmacys = await indexPharma.execute()

    return res.json(pharmacys)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, location, city, uf } = req.body

    const createPharma = container.resolve(CreatePharmacy)

    const pharmacy = await createPharma.execute({
      name,
      location,
      city,
      uf,
    })

    return res.json(pharmacy)
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, uf, city } = req.body
    const { id } = req.params

    const updatePharma = container.resolve(UpdatePharmacy)

    const pharmacy = await updatePharma.execute({
      id,
      name,
      uf,
      city,
    })

    return res.json(pharmacy)
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const deletePharma = container.resolve(DeletePharmacy)

    await deletePharma.execute({ id })

    return res.send()
  }
}
