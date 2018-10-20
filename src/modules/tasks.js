/**
 * Created by BANO.notIT on 21.10.18.
 */

const defaultTask = {
    id: -1,
    table: '',
    tags: [],
    description: '',
    team: '',
    slack_user: ''
}

export default {
    state: [],
    mutations: {
        applyTask(state, taskIn) {
            for (let i = 0; i < state.length; i++) {
                let elem = state[i]
                if (elem.id === taskIn.id) {
                    Object.assign(elem, taskIn)
                    return
                }
            }

            state.push({
                ...defaultTask,
                ...taskIn
            })
        },
        deleteTask(state, id) {

            for (let i = 0; i < state.length; i++) {
                let elem = state[i]
                if (elem.id === id) {
                    state.splice(i, 1)
                    return
                }
            }
        }
    },
    actions: {},
}
