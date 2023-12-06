import { create } from 'zustand'

interface useBarberScheduleModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  barberId: string
  setBarberId: (barberId: string) => void
}

export const useBarberScheduleModal = create<useBarberScheduleModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    barberId: '',
    setBarberId: (id: string) => set({ barberId: id }),
  }),
)
