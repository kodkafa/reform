import * as Yup from 'yup';
import { ReformSubmitHandler } from '../../lib/Form';

export const handleSubmit: ReformSubmitHandler = (data) => {
  alert(
    (data || {}).nativeEvent
      ? 'Button Event'
      : JSON.stringify(data || {}, null, 1),
  );
};
export { handleSubmit as handleClick };
export const handleAsyncSubmit: ReformSubmitHandler = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  alert(
    (data || {}).nativeEvent
      ? 'Button Event'
      : JSON.stringify(data || {}, null, 1),
  );
};

export const handleSubmitWithError: ReformSubmitHandler = (data, setError) => {
  setError(Object.keys(data)[0], { message: 'An error ...' });
  return false;
};
export const handleAsyncSubmitWithError: ReformSubmitHandler = async (
  data,
  setError,
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setError(Object.keys(data)[0], { message: 'An error ...' });
  return false;
};

export const schema = Yup.object().shape({});

export const schemaLogin = Yup.object().shape({
  email: Yup.string().required('Required').email('Must be a valid email'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          'Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      },
    ),
});

export const schemaRegister = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /(^[A-Za-z]{2,16})' '?([A-Za-z]{2,16})?' '?([A-Za-z]{3,16})?' '?([A-Za-z]{3,16})/,
      {
        message: 'It should be a full name eg: Jon Doe',
      },
    ),
  email: Yup.string().required('Required').email('Must be a valid email'),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          'Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.',
      },
    ),
});
