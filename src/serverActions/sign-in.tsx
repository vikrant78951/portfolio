
import { signIn } from "@/auth"
import { Button } from "@/src/components/ui/button"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit" className="text-white font-bold cursor-pointer">Signin with Google</Button>
    </form>
  )
} 