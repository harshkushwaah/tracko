export type Id = string|number;

export type Column = {
    id: Id;
    name : string;
    rating : string;
    feedback : string;
    status: string

}
export type Row = {
    id: Id;
    columnId: Id;
    name : string;
    feedback: string;
    status: string;
    rating : number;
}