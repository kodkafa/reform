# REFORM

**Reform** is simplify your _form structure_, and you can style it without overwrite.

This is a **React library** that is developed with
nested [React Hook Form](https://react-hook-form.com/advanced-usage/#FormProviderPerformance) , [Yup](https://www.npmjs.com/package/yup)
and [Tailwind]().
By the way, Tailwind is optional. And you can use [Preline UI](https://preline.co/docs/index.html) too.

#### LOGIN SAMPLE WITH TAILWIND

```tsx file=Login.component.tsx
import { Form, Input, Submit, ReformSubmitHandler } from '@kodkafa/reform';
import '@kodkafa/reform/reform.tailwind.css';

export default function Login() {
  const handleSubmit: ReformSubmitHandler = async (data, setError) => {
    // await your backend requesnt
    // if you catch a field error you can set easily via
    // setError('email', {message:'The email does not match any account!'})
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
        <div>
          <Input label='E-mail' name='email' placeholder='jon@doe.com' />
        </div>
        <div>
          <PasswordInput label='Password' name='password' placeholder='your strong password' />
        </div>
        <div className='flex justify-between'>
          <Checkbox label='Remember me' name='remember' />
          <a href='#' className='text-primary mb-1 text-sm'>
            Forgot password
          </a>
        </div>
        <div>
          <Submit>Login</Submit>
        </div>
      </div>
    </Form>
  );
}
```

#### LOGIN SAMPLE WITH PRELINE

Do not forget add `@tailwindcss/forms` and `preline/plugin` in `tailwind.config`

```js file=tailwind.config.js
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
```

```tsx file=Login.component.tsx
import { Form, Input, Submit, ReformSubmitHandler } from '@kodkafa/reform';
import '@kodkafa/reform/reform.preline.css';

export default function Login() {
  const handleSubmit: ReformSubmitHandler = async (data, setError) => {
    // await your backend requesnt
    // if you catch a field error you can set easily via
    // setError('email', {message:'The email does not match any account!'})
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-4'>
        <div>
          <Input label='E-mail' name='email' placeholder='jon@doe.com' />
        </div>
        <div>
          <PasswordInput label='Password' name='password' placeholder='your strong password' />
        </div>
        <div className='flex justify-between'>
          <Checkbox label='Remember me' name='remember' />
          <a href='#' className='text-primary mb-1 text-sm'>
            Forgot password
          </a>
        </div>
        <div>
          <Submit>Login</Submit>
        </div>
      </div>
    </Form>
  );
}
```

#### WITHOUT TAILWIND

You can use the compiled css file,
or you can write your own.

```ts
import '@kodkafa/reform/reform.css';
```

### VALIDATION

```tsx
...
const schemaLogin = Yup.object().shape({
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
...
<Form onSubmit={handleSubmit} schema={schemaLogin}>
...
```
