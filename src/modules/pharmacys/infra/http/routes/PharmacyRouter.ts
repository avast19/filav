import { Router } from 'express'
import PharmacyController from '../controllers/PharmacyController'
import middlewareAuthAdmin from '@modules/sessions/infra/http/middlewares/AuthenticationAdmin'

const pharmaRoutes = Router()
const pharmaController = new PharmacyController()

pharmaRoutes.use(middlewareAuthAdmin)

pharmaRoutes.post('/', pharmaController.create)

pharmaRoutes.get('/:id', pharmaController.show)
pharmaRoutes.get('/', pharmaController.index)
pharmaRoutes.put('/:id', pharmaController.update)
pharmaRoutes.delete('/:id', pharmaController.delete)

export default pharmaRoutes
