import z from 'zod';

const invalidLength ="Invalid length, min required 3";
const nonEmpty = "The field cannot be empty";

export const RegisterFormValidator = z.object({
    ownerName: z.string().min(3,invalidLength).nonempty(nonEmpty),
    ownerAddress: z.string().min(10,invalidLength).nonempty(nonEmpty),
    ownerPhone:z.string().min(10,invalidLength).nonempty(nonEmpty),
    ownerEmail:z.string().email().nonempty(nonEmpty),
    ownerPassword:z.string().regex(new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9\-\_\$\#\@]{7,}$/)).nonempty(nonEmpty),
    ownerPasswordConfirm: z.string().regex(new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9\-\_\$\#\@]{7,}$/)),
    businessName: z.string().min(3,invalidLength).nonempty(nonEmpty),
    businessAddress:z.string().min(3,invalidLength).nonempty(nonEmpty),
    plan:z.string().regex(new RegExp(/^(1|2|3)$/),'Plan must be selected').nonempty(nonEmpty),
})