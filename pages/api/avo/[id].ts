import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const anAvo = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const id = request.query.id
  const item = await db.getById(id as string)

  response.status(200).json({ item })
}

export default anAvo
