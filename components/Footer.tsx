import { logoutAccount } from "@/lib/actions/user.actions"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


const Footer = ({ user, type }: FooterProps) => {

  const router = useRouter();

  const handleLogOut = async () => {
    const loggedout = await logoutAccount();

    if (loggedout) {
      router.push('/sign-in')
    }
  }

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? "footer_name-mobile" : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>
      <div className={type === 'mobile' ? "footer_email-mobile" : 'footer_email'}>
        <h1 className="font-semibold text-14 truncate text-gray-700">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <Dialog>
      <DialogTrigger asChild>
        <div className="footer_image">
          <Image src='/icons/logout.svg' alt="logout" fill/>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Log Out</DialogTitle>
          <DialogDescription>
            Are you sure you want to get out.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button className="text-white bg-red-700" type="submit" onClick={handleLogOut}>Log Out</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </footer>
  )
}

export default Footer