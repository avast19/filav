import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import authConfig from '@config/auth'
import AppError from '@shared/errors/AppError'

interface IPayloadToken {
  iat: number
  exp: number
  sub: string
}

export default function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization

  if (!authHeader)
    throw new AppError('Para executar esta opção, é preciso estar logado', 401)

  const token = authHeader

  try {
    if (authConfig.admin.secret != null) {
      const decoded = verify(token, authConfig.admin.secret)
      const { sub } = decoded as IPayloadToken
      req.body.id = sub
      return next()
    }
  } catch {
    throw new AppError('Para executar esta opção, é preciso estar logado', 401)
  }
}
