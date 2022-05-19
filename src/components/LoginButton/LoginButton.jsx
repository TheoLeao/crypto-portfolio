import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Coonecté en tant que {session.user.email} <br />
        <button onClick={() => signOut()}>Se déconnecter</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Se connecter</button>
    </>
  )
}