import AuthenticateAdmin from '@modules/sessions/services/AuthenticateAdmin'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class SessionController {
  public async authenticateAdmin(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const { email, password } = req.body

    const authAdmin = container.resolve(AuthenticateAdmin)

    const { admin_id, token } = await authAdmin.execute({
      email,
      password,
    })

    return res.json({ admin_id, token })
  }
}
