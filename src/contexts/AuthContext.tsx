import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../services/api";

type User = {
  name: string;
  email: string;
};

type SignInCredentials = {
  credential?: string;
  cpf?: string;
  email?: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User;
  isAuthorized: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { "eco.token": token } = parseCookies();

    if (token) {
      api
        .get(`/me`, { headers: { "auth-token": token } })
        .then((response) => {
          const { name, email } = response.data;

          setUser({ name, email });
          setIsAuthorized(true);
          Router.push("/dashboard");
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({
    email,
    cpf,
    credential,
    password,
  }: SignInCredentials) {
    let credentialLogin = "";

    if (email) {
      credentialLogin = email;
    }

    if (credential) {
      credentialLogin = credential;
    }

    if (cpf) {
      credentialLogin = cpf;
    }

    const response = await api.post("login", {
      credentialLogin,
      password,
    });

    const { token, name } = response.data;

    setCookie(undefined, "eco.token", token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    setUser({
      name,
      email,
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setIsAuthorized(true);
    Router.push("/dashboard");
  }

  async function signOut() {
    destroyCookie(undefined, "eco.token");
    setIsAuthorized(false);

    authChannel.postMessage("signOut");

    Router.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
}
