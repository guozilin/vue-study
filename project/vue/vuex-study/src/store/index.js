import Vuex from 'vuex'
import defaultState from './state/state'

import mutations from './mutations/mutations'

import getters from './getters/getters'

// const store = new Vuex.Store({
// 	state: {
// 		count: 0
// 	},
// 	mutations: {
// 		updateCount(state,num){
// 			state.count = num
// 		}
// 	}
// })
//  step 2 
// export default () => {
// 	return new Vuex.Store({
// 		state: {
// 			count: 0
// 		},
// 		mutations: {
// 			updateCount(state, num) {
// 				state.count = num
// 			}
// 		}
// 	})
// }

export default () => {
	return new Vuex.Store({
		state: defaultState,
		mutations,
		getters

	})
}