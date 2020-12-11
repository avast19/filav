import { Router } from 'express'
import AdministratorController from '../controllers/AdministratorController'
import middlewareAuthAdmin from '@modules/sessions/infra/http/middlewares/AuthenticationAdministrator'

const adminRoutes = Router()
const adminController = new AdministratorController()

adminRoutes.post('/', adminController.create)

adminRoutes.use(middlewareAuthAdmin)

adminRoutes.get('/', adminController.show)
adminRoutes.get('/list', adminController.index)
adminRoutes.put('/', adminController.update)
adminRoutes.delete('/', adminController.delete)

export default adminRoutes
