import { Router } from 'express'

const router = Router()

router.get('/heads', async (_, res) => {
  // const db = await getDb()
  // const ethereumHeadRepository = getCustomRepository(
  //   EthereumHeadRepository,
  //   db.name,
  // )

  // const heads = await ethereumHeadRepository.all({})
  const heads = [{ hello: 'jb' }]
  console.log(heads)
  return res.send(JSON.stringify(heads))
})

export default router
