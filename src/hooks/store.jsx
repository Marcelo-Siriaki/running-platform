import { create } from "zustand";

const useStore = create((set) => ({
    age: '',
    setAge: (age) => set({ age }),
    sex: '',
    setSex: (sex) => set({ sex }),
    speed: '',
    setSpeed: (speed) => set({ speed }),
    restHr: '',
    setRestHr: (restHr) => set({ restHr }),
    pse: '',
    setPse: (pse) => set({ pse }),
    selectedMethod: 'vo2',
    setSelectedMethod: (selectedMethod) => set({ selectedMethod }),
    fcMax: null,
    setFcMax: (fcMax) => set({ fcMax }),
    hrReserve: null,
    setHrReserve: (hrReserve) => set({ hrReserve }),
    modality: '',
    setModality: (modality) => set({ modality }),
    resetFormAndMethods: () => set({
        age: '',
        sex: '',
        speed: '',
        restHr: '',
        pse: '',
        selectedMethod: 'vo2',
        fcMax: null,
        hrReserve: null,
        modality: '',
    }),

}
));

export default useStore;