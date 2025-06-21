import z from 'zod';


export const LoginFormValidator = z.object(
    {
        "user-email":z.string().email(),
        "user-password":z.string()
    }
)