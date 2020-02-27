import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

interface OwnProps {
  rowsPerPage?: number
}

interface StateProps {
  adminHeads?: EthereumHead[]
  count: AppState['adminHeadIndex']['count']
}

interface DispatchProps {
  fetchAdminHeads: DispatchBinding<typeof fetchAdminHeads>
}

interface Props
  extends WithStyles<typeof styles>,
    RouteComponentProps,
    StateProps,
    DispatchProps,
    OwnProps {}

export const Index: React.FC<Props> = ({
  adminHeads,
  fetchAdminHeads,
  count,
  rowsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const onChangePage = (_event: ChangePageEvent, page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetchAdminHeads(currentPage, rowsPerPage)
  }, [rowsPerPage, currentPage, fetchAdminHeads])

  return <div>hello</div>
}

export default Index
