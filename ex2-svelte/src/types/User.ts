import type { Company } from "./Company"

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    company: Company,
    avatar: any
}