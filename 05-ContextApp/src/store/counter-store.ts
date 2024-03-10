import {create} from 'zustand';

export interface CounterState {
  count: number;

  incrementBy: (value: number) => void;
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<CounterState>()((set, get) => ({
  count: 0,

  incrementBy: (value: number) => set(state => ({count: state.count + value})),
  increment: () => set(state => ({count: state.count+1})),
  decrement: () => set(state => ({count: state.count-1})),
}));
