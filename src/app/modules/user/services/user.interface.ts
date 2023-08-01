
export interface Register {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface RegisterReturn {
    id?: string,
    success?: boolean
    message?: string;
}

export interface EmailReturn {
    success: boolean,
    otp: string
}

export interface DetailsReturn {
    success: boolean,
    token: string,
}

export interface LoginReturn {
    error: string
    token: string,
    id: string
    message: string
}

export interface ProfileDetails {
    _id: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    height: number;
    weight: number;
    goal: string;
    goalWeight: number;
    months: number;
    gender: string;
    activity: string;
    caloriesBurn: number;
    caloriesNeed: number;
    imageUrl: string;
    isUpload?: boolean;
    joinDate?: Date;
}

export interface UpdateDetails {
    name: string;
    phone: number;
    age: number;
    height: number;
    weight: number;
}

export interface Error {
    statusText: string;
    status: number;
    error: {}
}

export interface PaymentData {
    id: string;
    object: string;
    client_ip: string;
    created: number;
    email: string;
    livemode: boolean;
    type: string;
    used: boolean;
    card: {
        exp_month: number;
        exp_year: number;
        funding: string;
        id: string;
        last4: string;
        name: string;
        object: string;
    }
}
