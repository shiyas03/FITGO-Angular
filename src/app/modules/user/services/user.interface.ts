import { Trainer, User } from "../store/user";

export interface Register {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface RegisterReturn {
    success: boolean
    message: string;
}

export interface EmailReturn {
    success: boolean,
    otp: string
}

export interface LoginReturn {
    error: string
    token: string,
    message: string
}

interface works {
    _id: string
    workouts: Workout;
    date: Date
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
    workouts: works[]
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
    amount: number;
    specialized: string;
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

export interface Payment {
    amount: number;
    userId: string;
    trainerId: string;
    packageId: string;
}

export interface Workout {
    _id: string
    title: string;
    muscle: string;
    level: string;
    reps: string;
    sets: string
    interval: string
    duration: string
    overview: string;
    thumbnail: string
    video: string
    trainerId: {
        name: string;
        imageUrl: string;
        experience: string;
        specialized: string;
    }
    publish: boolean;
}

export interface PaymentDetails {
    _id:string;
    amount: number;
    paidDate: Date;
    expiryDate: Date;
    paymentId: string;
    packageId: string;
    sessionId: string;
    userId: User;
    trainerId: Trainer;
    user_status: string;
}

export interface Chat {
    sender: string;
    reciever: string;
    content: string;
}

export interface Messages {
    _id: string;
    connection: string
    sender: string
    reciever: string
    content?: string;
    timestamp: Date;
}

export interface AllChat {
    _id: string;
    connection: string,
    sender: string,
    reciever: string,
    content: string;
    timestamp: string;
    seen: boolean
}

export interface ChatShow {
    _id: string,
    name: string,
    imageUrl: string,
    notification: number
}

export interface Connections {
    _id: string,
    connections: {
        user: ChatShow,
        trainer: ChatShow
    },
    timestamp: Date
}

interface Connection {
    user: {
        name: string;
        _id: string;
        imageUrl: string;
    };
    trainer: {
        name: string;
        _id: string;
        imageUrl: string;
    };
}

export interface Details {
    _id: string;
    connections: Connection;
}

export interface contact{
    fname:string;
    sname:string;
    email:string;
    message:string;
}