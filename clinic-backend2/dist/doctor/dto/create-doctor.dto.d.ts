declare class AvailabilityItem {
    day: string;
    from: string;
    to: string;
}
export declare class CreateDoctorDto {
    name: string;
    specialization: string;
    gender?: string;
    location?: string;
    availability?: AvailabilityItem[];
}
export {};
