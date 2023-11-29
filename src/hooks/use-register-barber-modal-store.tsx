import { create } from 'zustand'

interface useRegisterBarberModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useRegisterBarberModal = create<useRegisterBarberModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  }),
)
