"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { AppState, Registration, SavedSession } from "@/types";

type Action =
  | { type: "SAVE_WORKSHOP"; payload: { workshopId: string } }
  | { type: "UNSAVE_WORKSHOP"; payload: { workshopId: string } }
  | { type: "REGISTER_WORKSHOP"; payload: Registration }
  | { type: "UNREGISTER_WORKSHOP"; payload: { workshopId: string } }
  | { type: "LOAD_STATE"; payload: AppState };

const initialState: AppState = {
  savedSessions: [],
  registrations: [],
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SAVE_WORKSHOP":
      if (state.savedSessions.some((s) => s.workshopId === action.payload.workshopId)) {
        return state;
      }
      return {
        ...state,
        savedSessions: [
          ...state.savedSessions,
          { workshopId: action.payload.workshopId, savedAt: new Date().toISOString() },
        ],
      };

    case "UNSAVE_WORKSHOP":
      return {
        ...state,
        savedSessions: state.savedSessions.filter(
          (s) => s.workshopId !== action.payload.workshopId
        ),
      };

    case "REGISTER_WORKSHOP":
      if (state.registrations.some((r) => r.workshopId === action.payload.workshopId)) {
        return state;
      }
      return {
        ...state,
        registrations: [...state.registrations, action.payload],
      };

    case "UNREGISTER_WORKSHOP":
      return {
        ...state,
        registrations: state.registrations.filter(
          (r) => r.workshopId !== action.payload.workshopId
        ),
      };

    case "LOAD_STATE":
      return action.payload;

    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = "mentorhub-state";

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as AppState;
        dispatch({ type: "LOAD_STATE", payload: parsed });
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage errors
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
