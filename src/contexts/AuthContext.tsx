import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../services/api";

type User = {
  name: string;
  email: string;
  score: string;
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
  reload: () => void;
  user: User;
  isAuthorized: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [isAuthorized, setIsAuthorized] = useState("wait");

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
    reload();
  }, []);

  async function reload() {
    const { "eco.token": token } = parseCookies();

    if (token) {
      await api
        .get("auth/me", { headers: { "auth-token": token } })
        .then((response) => {
          const { name, email, score } = response.data;

          setUser({ name, email, score });
          setIsAuthorized("true");
        })
        .catch(() => {
          signOut();
        });
    } else {
      setIsAuthorized("false");
      Router.push("/");
    }
  }

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

    const response = await api.post("auth/login", {
      credentialLogin,
      password,
    });

    const { token } = response.data;

    const user = await api.get("auth/me", { headers: { "auth-token": token } });
    const { name, score } = user.data;

    setUser({
      name,
      email,
      score,
    });

    setCookie(undefined, "eco.token", token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setIsAuthorized("true");
    Router.push("/dashboard");
  }

  async function signOut() {
    Router.push("/");
    destroyCookie(undefined, "eco.token");
    setIsAuthorized("false");

    authChannel.postMessage("signOut");
  }

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthorized, reload }}
    >
      {children}
    </AuthContext.Provider>
  );
}
