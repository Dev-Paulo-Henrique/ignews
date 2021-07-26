import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {  id: 1, name: 'Paulo' },
    {  id: 1, name: 'Rafaela' },
    {  id: 1, name: 'Thalita' },
  ]
  return response.json(users)
}