import { Router } from 'express'
import { getDb } from '../../database'
import { EthereumHeadRepository } from '../../repositories/EthereumHeadRepository'
import { getCustomRepository } from 'typeorm'

const router = Router()

router.get('/heads', async (req, res) => {
  const db = await getDb()
  const ethereumHeadRepository = getCustomRepository(
    EthereumHeadRepository,
    db.name,
  )

  const heads = await ethereumHeadRepository.all({})
  return res.send(heads)
})
