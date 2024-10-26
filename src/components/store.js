import { create } from "zustand";

const useFormStore = create((set) => ({
  formPhase: 1,
  businessAddress: "",
  businessType: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  zip: "",
  setBusinessAddress: (value) => set({ businessAddress: value }),
  setBusinessType: (value) => set({ businessType: value }),
  setAddressLine1: (value) => set({ addressLine1: value }),
  setAddressLine2: (value) => set({ addressLine2: value }),
  setCity: (value) => set({ city: value }),
  setZip: (value) => set({ zip: value }),
  nextPhase: () => set((state) => ({ formPhase: state.formPhase + 1 })),
  previousPhase: () => set((state) => ({ formPhase: state.formPhase - 1 })),
}));

export default useFormStore;
