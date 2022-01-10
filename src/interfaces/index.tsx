export interface People extends Array<{
    name: string,
    age: number,
    note?: string,
    imageUrl: string
}> { }

export interface FormPeople {
    name: string,
    age: 0,
    note?: string,
    imageUrl: string
}