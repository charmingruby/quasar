import { create } from 'zustand'

interface useDeleteBarberModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  barberId: string
  setBarberId: (id: string) => void
}

export const useDeleteBarberModal = create<useDeleteBarberModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    barberId: '',
    setBarberId: (id: string) => set({ barberId: id }),
  }),
)
