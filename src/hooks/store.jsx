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
    menuOption: '',
    setMenuOption: (menuOption) => set({ menuOption }),
    selectedMethod: 'vo2',
    setSelectedMethod: (selectedMethod) => set({ selectedMethod }),
}
));

export default useStore;