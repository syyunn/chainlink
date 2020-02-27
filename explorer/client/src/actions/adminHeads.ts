import * as api from '../api/index'
import { request } from './helpers'

export const fetchAdminHeads = request(
  'ADMIN_HEADS',
  api.v1.adminHeads.getHeads,
  json => json,
)
