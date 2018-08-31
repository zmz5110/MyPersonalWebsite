import {
  types as ClockTypes,
  createStore,
} from '../store'

const { TimeInfo } = ClockTypes

console.log('timeInfo: ', TimeInfo)

const store = createStore({
	timeInfo: TimeInfo,
}, {
	timeInfo: {}
})

window.store = store

export default store