export interface Show {
  id: number
  url: string
  name: string
  language: string
  status: string
  officialSite: string
  image: {
    medium: string
    original: string
  }
  summary: string
}
