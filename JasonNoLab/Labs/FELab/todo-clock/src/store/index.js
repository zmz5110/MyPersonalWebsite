import { types as MSTTypes } from 'mobx-state-tree'
import BaseType from './types/BaseType'
import TimeInfo from './types/TimeInfo'

const types = {
  BaseType,
  TimeInfo,
}

function createStore(storeStructure, storeInitData) {
  const Store = MSTTypes.model(storeStructure)
  const store = Store.create(storeInitData)
  return store
}

export {
  types,
  createStore,
}
