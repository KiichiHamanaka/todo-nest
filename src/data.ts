type Status = 'open' | `close`
export type TodoTableSchema = {
    id: number
    todo: string
    status: Status
}

const table: TodoTableSchema[] = [
    {
        id: 0,
        todo: 'メモ1',
        status: 'open',
    },
    {
        id: 1,
        todo: 'メモ1',
        status: 'open',
    }, {
        id: 2,
        todo: 'メモfdsfa',
        status: 'open',
    }, {
        id: 3,
        todo: 'fghsfgh',
        status: 'close',
    }, {
        id: 4,
        todo: 'メモfgdsfg1',
        status: 'close',
    },
]

export default table
