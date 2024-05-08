 import * as yup from 'yup'
 import { yupResolver } from '@hookform/resolvers/yup'
 export const   signupSchemaschemaResolver = yupResolver(
    yup.object().shape({
      email: yup.string().email("Please enter a valid email address").required("Please enter an email"),
      username: yup.string().min(6).required("Please enter your username"),
    }),
  )