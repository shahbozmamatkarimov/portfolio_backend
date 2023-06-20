import { Response } from 'express';
export declare function generateToken(jwt_payload: object, jwtService: any): Promise<{
    access_token: any;
    refresh_token: any;
}>;
export declare function writeToCookie(refresh_token: string, user: string, res: Response): Promise<void>;
