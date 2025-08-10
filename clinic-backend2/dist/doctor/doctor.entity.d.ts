export declare class Doctor {
    id: number;
    name: string;
    specialization: string;
    gender: string;
    location: string;
    availability: {
        day: string;
        from: string;
        to: string;
    }[];
}
