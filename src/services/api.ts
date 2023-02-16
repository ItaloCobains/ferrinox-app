import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from '@/services/errors/AuthTokenError'

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['nextauth.token']}`
        })
}