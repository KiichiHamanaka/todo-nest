type Status = 'open' | `close`

export type TodoOutputType = {
    id:number
    todo:string
    status:Status
}
