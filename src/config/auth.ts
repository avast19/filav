export default {
  user: {
    secret: process.env.APP_SECRET,
    expiresIn: '5d',
  },
  admin: {
    secret: process.env.ADMIN_SECRET,
    expiresIn: '1d',
  },
}
