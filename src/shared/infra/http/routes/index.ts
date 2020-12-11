import { Router } from 'express'

import UsersRouter from '@modules/users/infra/http/routes/UsersRouter'
import SessionsRouter from '@modules/sessions/infra/http/routes/SessionRouter'
import AdministratorRouter from '@modules/administrators/infra/http/routes/AdministratorRouter'
// import RequestsRouter from '@modules/requests/infra/http/routes/RequestsRouter'

const routes = Router()

routes.use('/sessions', SessionsRouter)
routes.use('/users', UsersRouter)
routes.use('/administrators', AdministratorRouter)

export default routes
