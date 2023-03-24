import create from "zustand";

const useStore = create((set) => ({
  ready: false,
  setReady: () => set({ ready: true }),
}));

export { useStore };
