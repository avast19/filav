import ICreateDocumentDTO from '@modules/documents/dtos/ICreateDocumentDTO'

export default interface ICreateUserDTO {
  full_name: string
  birth_date: Date
  phone_number: string
  document: ICreateDocumentDTO
  health_area: boolean
}
