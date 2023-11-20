export interface User {
    id: number;
    first_name: string;
    second_name: string;
    surname: string;
    second_surname: string;
    department_id: number;
    charge_id: number;
    email: string;
    department: Department;
    charge: Charge;
}

export interface Department {
    id: number;
    name: string;
    status: number;
    user_id: number;
    user: User;
}

export interface Charge {
    id: number;
    name: string;
    status: number;
    user_id: number;
    user: User;
}
