import React from "react"
import { createStore, StoreApi, useStore } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

type AuthState = {
    _hasHydrated: boolean
    token: string | null
}

type AuthActions = {
    setHasHydrated: (_hasHydrated: AuthState["_hasHydrated"]) => void
    setToken: (token: AuthState["token"]) => void
}

type AuthStore = AuthState & AuthActions

function createAuthStore() {
    return createStore<AuthStore>()(
        persist(
            (set) => ({
                _hasHydrated: false,
                token: null,

                setHasHydrated: (_hasHydrated) => set({ _hasHydrated }),
                setToken: (token) => set({ token }),
            }),
            {
                name: "auth",
                storage: createJSONStorage(() => localStorage),
                onRehydrateStorage: (state) => {
                    return () => state.setHasHydrated(true)
                },
            }
        )
    )
}

const AuthContext = React.createContext<StoreApi<AuthStore> | null>(null)

type AuthProviderProps = {
    children: React.ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
    const storeRef = React.useRef<StoreApi<AuthStore>>()

    if (!storeRef.current) {
        storeRef.current = createAuthStore()
    }

    return (
        <AuthContext.Provider value={storeRef.current}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth<T>(selector: (store: AuthStore) => T): T {
    const context = React.useContext(AuthContext)

    if (!context) {
        throw new Error(`useAuth must be used within AuthProvider`)
    }

    return useStore(context, selector)
}

export { AuthProvider, useAuth }
