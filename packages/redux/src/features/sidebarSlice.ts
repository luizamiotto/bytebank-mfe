import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SidebarItem = {
  name: string;
  selected: boolean;
};

type SidebarState = {
  items: SidebarItem[];
};

const initialState: SidebarState = {
  items: [
    { name: "Início", selected: true },
    { name: "Transferências", selected: false },
    { name: "Investimentos", selected: false },
    { name: "Outros serviços", selected: false },
  ],
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSelectedItem: (state, action: PayloadAction<string>) => {
      state.items.forEach((item) => {
        item.selected = item.name === action.payload;
      });
    },
  },
});

export const setSelectedItem = sidebarSlice.actions;

// selectors
export const selectSidebarItems = (state: any) => state.sidebar.items;
export const selectSelectedItem = (state: any) =>
  state.sidebar.items.find((i: SidebarItem) => i.selected)?.name;

export default sidebarSlice.reducer;
