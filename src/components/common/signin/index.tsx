'use client'

import { useRouter } from 'next/navigation'

import {
    useState,
    useCallback,
    FormEventHandler
} from 'react'

import { signIn } from 'next-auth/react'

import { GoogleBtn } from '@/components/ui/googleBtn'

import {
    SSection,
    SForm,
    SInput,
    SBtnWrap,
    SButton
} from './style'

import { SH1 } from '../countryItem/style'

export const SignIn = () => {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'email':
                setEmail(e.target.value)
                break
            case 'password':
                setPassword(e.target.value)
                break
            default: return
        }
    }, [])

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if(res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }

    return (
        <SSection>
            <SH1>
                Sign In
            </SH1>
            <SForm onSubmit={handleSubmit}>
                <SInput
                    type='text'
                    name='email'
                    placeholder='EMAIL'
                    value={email}
                    onChange={inputChange}
                />
                <SInput
                    type='password'
                    name='password'
                    placeholder='PASSWORD'
                    value={password}
                    onChange={inputChange}
                />
                <SBtnWrap>
                    <SButton
                        type='submit'
                        $marginTop='20px'
                    >
                        SIGN IN
                    </SButton>
                </SBtnWrap>
            </SForm>
            <GoogleBtn/>
        </SSection>
    )
}