import * as Yup from "yup";

import { emailValidation, passwordValidation } from "../constants/user.constants.js";

export const passwordSchema = Yup
    .string()
    .trim()
    .matches(
        passwordValidation.value,
        passwordValidation.message)
    .required();

export const emailSchema = Yup
    .string()
    .trim()
    .matches(
        emailValidation.value,
        emailValidation.message)
    .required();

export const addUserSchema = Yup.object({
    username: Yup.string().trim().required(),
    email: emailSchema,
    password: passwordSchema
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const changePasswordSchema = Yup.object({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const changeEmailSchema = Yup.object({
    password: passwordSchema,
    newEmail: emailSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);

export const deleteUserSchema = Yup.object({
    password: passwordSchema,
}).noUnknown(true, ({ unknown }) => `Unknown field: ${unknown}`);