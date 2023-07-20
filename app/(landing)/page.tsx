import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
        <h1>Landing Page</h1>
            <div>
                <Link href={'/sign-in'}>
                    <Button variant={'link'}>
                        Login
                    </Button>
                </Link>
                <Link href={'/sign-up'}>
                    <Button variant={'ghost'}>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;