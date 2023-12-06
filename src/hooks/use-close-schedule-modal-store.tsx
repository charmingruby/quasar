import { create } from 'zustand'

interface useCloseScheduleModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  schedulingId: string
  setSchedulingId: (id: string) => void
  status: string
  setStatus: (status: string) => void
}

export const useCloseScheduleModal = create<useCloseScheduleModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    schedulingId: '',
    setSchedulingId: (id: string) => set({ schedulingId: id }),
    status: '',
    setStatus: (status: string) => set({ status }),
  }),
)
