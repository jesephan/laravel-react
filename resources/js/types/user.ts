import { Role } from "./role";

export interface User {
    id: number;
    full_name: string;
    email: string;
    roles: Role[];
}
