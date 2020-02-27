import { RouteComponentProps } from '@reach/router'
import React, { useEffect } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { fetchAdminHeads } from '../../../actions/adminHeads'
import { AppState } from '../../../reducers'
import { DispatchBinding } from '../../../utils/types'

interface OwnProps {
  rowsPerPage?: number
}

interface StateProps {
  adminHeads?: AppState['adminHeads']['heads']
}

interface DispatchProps {
  fetchAdminHeads: DispatchBinding<typeof fetchAdminHeads>
}

interface Props
  extends RouteComponentProps,
    StateProps,
    DispatchProps,
    OwnProps {}

export const Index: React.FC<Props> = ({ adminHeads, fetchAdminHeads }) => {
  useEffect(() => {
    fetchAdminHeads()
  }, [fetchAdminHeads])

  return <div>{JSON.stringify(adminHeads, null, 1)}</div>
}

const mapStateToProps: MapStateToProps<
  StateProps,
  OwnProps,
  AppState
> = state => {
  return {
    adminHeads: state.adminHeads.heads,
  }
}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = {
  fetchAdminHeads,
}

export const ConnectedIndex = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index)

export default ConnectedIndex
