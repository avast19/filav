import Location from '@modules/localizations/infra/typeorm/entities/Location'

export default interface ICreatePharmacyDTO {
  name: string
  location: Location
  city: string
  uf: string
}
