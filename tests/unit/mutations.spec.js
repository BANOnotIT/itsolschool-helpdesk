import tasks from '../../src/modules/tasks'
import 'should'


describe('Tasks module', () => {
    describe('mutations', () => {
        describe('changeTask', () => {

            let state = []

            beforeEach(() => state = [])

            it('should add default task if done', () => {

                tasks.mutations.applyTask(state, {id: 0})

                state.should.match([
                    {
                        id: 0,
                        table: '',
                        tags: [],
                        description: '',
                        team: '',
                        slack_user: ''
                    }
                ])


            })
            it('should prior params', () => {

                tasks.mutations.applyTask(state, {id: 0, table: '123'})

                state.should.match([
                    {
                        id: 0,
                        table: '123',
                        tags: [],
                        description: '',
                        team: '',
                        slack_user: ''
                    }
                ])
            })

            it('should change data', () => {


                tasks.mutations.applyTask(state, {id: 0})

                state.should.match([
                    {
                        id: 0,
                        table: '',
                        tags: [],
                        description: '',
                        team: '',
                        slack_user: ''
                    }
                ])

                tasks.mutations.applyTask(state, {id: 0, table: '123'})


                state.should.match([
                    {
                        id: 0,
                        table: '123',
                        tags: [],
                        description: '',
                        team: '',
                        slack_user: ''
                    }
                ])
            })
        })
        describe('deleteTask', () => {
            it('should delete task by id', () => {
                let state = [
                    {
                        id: 1,
                    },
                    {
                        id: 12,
                    },
                    {
                        id: 13,
                    },
                    {
                        id: 14,
                    },
                ]

                tasks.mutations.deleteTask(state, 1)

                state.should.match([
                    {
                        id: 12,
                    },
                    {
                        id: 13,
                    },
                    {
                        id: 14,
                    },
                ])

                tasks.mutations.deleteTask(state, 13)


                state.should.match([
                    {
                        id: 12,
                    },
                    {
                        id: 14,
                    },
                ])
            })
        })
    })
})

