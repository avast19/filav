import { Router } from 'express'
// import authUserMiddleware from '@modules/sessions/infra/http/middlewares/AuthenticationUser'
import UserController from '../controllers/UserController'

const userRoutes = Router()
const userController = new UserController()

userRoutes.post('/create', userController.create)

// userRoutes.use(authUserMiddleware)

userRoutes.get('/', userController.show)

export default userRoutes
