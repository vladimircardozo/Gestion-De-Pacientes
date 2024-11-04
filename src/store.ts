// Este store permite gestionar una lista de pacientes con funcionalidad para:
// Añadir un paciente nuevo.
// Borrar un paciente.
// Seleccionar un paciente (getPatientById).
// Actualizar un paciente seleccionado.

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from './types'

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
    persist( (set) => ({
        // Estado inicial
        patients: [],
        activeId: '',
        // Métodos para manipular el estado
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set((state) => ({
                patients: state.patients.filter( patient => patient.id !== id )
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (data) => {
            set((state) => ({
                patients: state.patients.map( patient => patient.id === state.activeId ? {id: state.activeId, ...data } : patient),
                activeId: ''
            }))
        }
    }), {
        name: 'patient-storage'
    })
))