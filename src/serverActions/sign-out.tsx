
import { signOut } from "@/auth"
import { Button } from "@/src/components/ui/button"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <Button type="submit" variant='outline' className="text-white font-bold cursor-pointer">Sign Out</Button>
    </form>
  )
} 