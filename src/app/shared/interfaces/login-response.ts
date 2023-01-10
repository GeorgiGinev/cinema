import { UserInterface } from "../resources/user/user.service";

export interface LoginResponse {
    access_token: string,
    token_type: string,
    expiration: number,
    user: UserInterface
}