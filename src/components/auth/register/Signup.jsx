import React, { useState } from 'react'
import './Signup.css'
import Navbar from '../../navbar/Navbar'
import Input from '../../commonComponents/input/Input'
import { useForm } from 'react-hook-form'
import { signupSchemaschemaResolver } from '../../schema/Schema'
import errorfield from '../../../assets/icons/errorfield.png'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: signupSchemaschemaResolver,
  })


  const onSubmit = async (values) => {
    const payload = {
      email: values.email,
      username: values.username,
    }

    if (payload.email && payload.username) {
      setLoading(true)
      setTimeout(() => {
        navigate('/success')
        setLoading(false)
      }, 2000);
    }

  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='signupMainContainer'>
        <div className='headingContainer'>
          <span>Registeration form</span>
          <h2>
            Start your success Journey here!
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              placeholder={"Please enter your name"}
              name={"username"}
              type={"text"}
              register={register}
              key={"username"}
            />
          </div>
          {errors.username && <p className='error'> <img src={errorfield} alt='error' />{errors.username.message} </p>}
          <div>
            <Input
              placeholder={"Please enter your email"}
              name={"email"}
              type={"email"}
              register={register}
              key={"email"}
            />
          </div>
          {errors.email && <p className='error'><img src={errorfield} alt='error' /> {errors.email.message} </p>}
          <div>
            <button type="submit" className='submitbutton' disabled={errors.username || errors.email} >{loading ? "Loading..." : "Submit"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
