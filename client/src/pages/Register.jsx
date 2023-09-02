import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const inputArrayValues = [...formData.values()];
  if (inputArrayValues.includes('')) {
    console.log('please provide all the values');
    return;
  }
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login'); //hook redirect
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue='john' />
        <FormRow type='text' name='lastName' defaultValue='doe' labelText='lastName' />
        <FormRow type='text' name='location' defaultValue='asdasdf' />
        <FormRow type='email' name='email' defaultValue='cbhumesh438@gamil.com' />
        <FormRow type='password' name='password' defaultValue='qwerasdfasdf' />
        <SubmitBtn formBtn />
        <p>
          Already member?
          <Link to='/login' className='member-btn'>
            login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
