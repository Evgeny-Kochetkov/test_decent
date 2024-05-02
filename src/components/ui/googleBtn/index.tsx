import { SButton } from '@/components/common/signin/style'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

export const GoogleBtn = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/profile'

    return (
        <SButton
            $marginTop='20px'
            onClick={() => signIn('google', { callbackUrl })}
        >
            Sign in with Google
        </SButton>
    )
}