import { User } from "./types"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth } = NextAuth({
  providers: [
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  })
  ]
});


// In-memory user store for demo purposes
type UserWithPassword = User & { password: string };
const users: UserWithPassword[] = [
  {
    id: "1",
    email: "demo@example.com",
    name: "Demo User",
    password: "password", // Not secure, for demo only
    createdAt: new Date(),
  },
];

function findUserByEmail(email: string): UserWithPassword | undefined {
  return users.find((u) => u.email === email);
}

export async function signIn(email: string, password: string): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const user = findUserByEmail(email);
  console.log(user);
  if (user && user.password === password) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
}

export async function signUp(name: string, email: string, password: string): Promise<User | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  if (findUserByEmail(email)) {
    return null; // User already exists
  }
  const newUser: UserWithPassword = {
    id: Date.now().toString(),
    email,
    name,
    password,
    createdAt: new Date(),
  };
  users.push(newUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _pw, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
}

export async function signOut(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 200));
}




export async function getCurrentUser(): Promise<User | null> {
  // NextAuth v5: auth() returns { user, ... }
  const session = await auth();
  // @ts-ignore
  if (session && session.user && session.user.email) {
    // @ts-ignore
    const user = findUserByEmail(session.user.email);
    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
  }
  return null;
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}
