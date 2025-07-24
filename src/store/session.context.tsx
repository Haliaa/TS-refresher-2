import { createContext, useContext, useReducer, type ReactNode } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type Sessions = {
  sessions: Session[];
};
const initialState: Sessions = {
  sessions: [],
};
type Props = {
  children: ReactNode;
};

type SessionsContextValue = Sessions & {
  bookSession: (session: Session) => void;
  cancelSession: (id: string) => void;
};

export const SessionsContext = createContext<SessionsContextValue | null>(null);
export const useSessionsContext = () => {
  const sessionsCtx = useContext(SessionsContext);
  if (sessionsCtx === null) {
    throw new Error("SessionsContext is null - that should not be the case");
  }
  return sessionsCtx;
};
type CancelSessionAction = { type: "CANCEL_SESSION"; payload: { id: string } };
type AddSessionAction = { type: "ADD_SESSION"; payload: Session };
type Action = AddSessionAction | CancelSessionAction;

const sessionsReducer = (state: Sessions, action: Action): Sessions => {
  if (action.type === "CANCEL_SESSION") {
    const sessionIndex = state.sessions.findIndex(
      (s) => s.id === action.payload.id
    );

    return { ...state, sessions: state.sessions.splice(sessionIndex, 1) };
  }
  if (action.type === "ADD_SESSION") {
    return {
      ...state,
      sessions: [...state.sessions, { ...action.payload }],
    };
  }
  return state;
};
export const SessionsContextProvider = ({ children }: Props) => {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);

  const ctx: SessionsContextValue = {
    sessions: sessionsState.sessions,
    bookSession(session: Session) {
      dispatch({ type: "ADD_SESSION", payload: session });
    },
    cancelSession(id: string) {
      dispatch({ type: "CANCEL_SESSION", payload: { id } });
    },
  };
  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  );
};
