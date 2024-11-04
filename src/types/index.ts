export type Patient = {
    id: string
    name: string
    cartaker: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'>