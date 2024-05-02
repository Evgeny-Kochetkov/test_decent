import { $api } from '.'

import { AxiosResponse } from 'axios'

export default class localServise {
    static async login(username: string, password: string): Promise<AxiosResponse> {
        return $api.post('/login', {username, password})
    }

    static async registration(email: string, username: string, password: string): Promise<AxiosResponse> {
        return $api.post('/register', {email, username, password})
    }
}