import { Request, Response } from 'express'
import { container } from 'tsyringe'
import FindUser from '@modules/users/services/FindUser'
import CreateUser from '@modules/users/services/CreateUser'

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      full_name,
      email,
      birthday_date,
      phone_number,
      document,
      city,
      password,
    } = req.body

    const createUser = container.resolve(CreateUser)

    const user = await createUser.execute({
      full_name,
      email,
      birthday_date,
      phone_number,
      city,
      document,
      password,
      external_customer_id: 'fsdfsdf',
    })

    return res.json(user)
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.body

    const findUser = container.resolve(FindUser)

    const user = await findUser.execute(id)

    return res.json(user)
  }
}
