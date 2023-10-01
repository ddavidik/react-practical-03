import { type ReactNode } from 'react';

import { route } from 'src/route';
import { Button, ErrorBanner, Stack } from 'src/shared/design-system';
import {
  CheckboxField,
  Form,
  InputField,
  zod,
  zodResolver,
} from 'src/shared/forms';
import { RouterLink } from 'src/shared/navigation';

const schema = zod
  .object({
    email: zod.string().email().nonempty(),
    name: zod.string().nonempty({ message: 'Name is required' }),
    password: zod.string().nonempty({ message: 'Password is required' }),
    passwordConfirmation: zod
      .string()
      .nonempty({ message: 'Password confirmation is required' }),
    userName: zod.string().nonempty({ message: 'Username is required' }),
    terms: zod.literal<boolean>(true, {
      errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords must match',
    path: ['passwordConfirmation'],
  });

type FormValues = zod.infer<typeof schema>;

const initialValues: FormValues = {
  email: '',
  name: '',
  password: '',
  passwordConfirmation: '',
  userName: '',
  terms: false,
};

export type SignUpFormProps = {
  isLoading: boolean;
  errorMessage?: string;
  onSubmit: (data: {
    email: string;
    password: string;
    name: string;
    userName: string;
  }) => void;
  children?: ReactNode;
};

export function SignUpForm({
  isLoading,
  errorMessage,
  onSubmit,
  children,
}: SignUpFormProps) {
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={initialValues}
      resolver={zodResolver(schema)}
      noValidate
    >
      <Stack spacing="3" py="4">
        {errorMessage && <ErrorBanner title={errorMessage} />}
        <InputField
          name="name"
          label="Name"
          type="text"
          isRequired
          autoFocus
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          name="userName"
          label="Username"
          type="text"
          isRequired
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          isRequired
          placeholder="e.g. john@doe.com"
          autoComplete="on"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          isRequired
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <InputField
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          isRequired
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <CheckboxField
          name="terms"
          label={
            <>
              I agree with the{' '}
              <RouterLink to={route.terms()}>terms and conditions</RouterLink>
            </>
          }
        />
      </Stack>
      <Button
        size="lg"
        type="submit"
        isLoading={isLoading}
        colorScheme="green"
        mt="4"
        mb="2"
      >
        Sign Up
      </Button>
      {children}
    </Form>
  );
}
