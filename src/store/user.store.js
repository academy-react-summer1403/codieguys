import { create } from "zustand";

const usePhoneStore = create((set) => ({
  phoneNumber: "",
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
}));

export default usePhoneStore;
