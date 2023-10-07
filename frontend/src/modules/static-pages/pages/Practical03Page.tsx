import { Textarea } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  BodyBackground,
  Flex,
  Heading,
  Paragraph,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from 'src/shared/design-system';
import { FormField, InputField, SwitchField, zod } from 'src/shared/forms';

import { SettingsSection } from '../molecules';

const schema = zod.object({
  firstName: zod.string().nonempty({ message: 'First name is required' }),
  lastName: zod.string().nonempty({ message: 'Last name is required' }),
  username: zod.string().nonempty({ message: 'Username is required' }),
  email: zod.string().email().nonempty({ message: 'Email is required' }),
  about: zod
    .string()
    .nonempty({ message: 'About is required' })
    .refine(
      (about) =>
        !about.toLowerCase().includes('lorem') &&
        !about.toLowerCase().includes('ipsum'),
      {
        message: 'About cannot contain "lorem" or "ipsum"',
      },
    ),
  agreeToc: zod.literal<boolean>(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
});

type FormValues = zod.infer<typeof schema>;

const defaultValues: FormValues = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'jdoe',
  email: 'john@doe.com',
  about: 'Lorem ipsum',
  agreeToc: true,
};

export function Practical03Page() {
  return (
    <>
      <BodyBackground bg="gray.100" />
      <Heading pb="4">Practical 03</Heading>

      <Stack>
        <SettingsSection
          title="Profile"
          description="This is your profile information."
          formProps={{
            defaultValues,
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
          resolver={zodResolver(schema)}
        >
          <Flex direction={{ base: 'column', sm: 'row' }} columnGap="2">
            <InputField name="firstName" label="First name" type="text" />
            <InputField name="lastName" label="Last name" type="text" />
          </Flex>
          <InputField name="username" label="User name" type="text" />
          <InputField name="email" label="Email address" type="email" />
          <FormField name="about" label="Profile bio">
            {(field) => <Textarea {...field} />}
          </FormField>
          <FormField name="visibility" label="Profile visibility">
            {() => (
              <Select>
                <option value="public">Public</option>
                <option value="friends">Only friends</option>
                <option value="private">Private</option>
              </Select>
            )}
          </FormField>
          <SwitchField name="agreeToc">
            {' '}
            Agree to Terms and Conditions
          </SwitchField>
        </SettingsSection>
        <SettingsSection
          title="Notifications"
          description="Setup how much notification you will receive"
          formProps={{
            defaultValues: {
              notificationsLevel: 'mentions',
            },
            onSubmit: (data) => {
              alert(JSON.stringify(data, null, 2));
            },
          }}
        >
          <RadioGroup>
            <Heading as="h5">Notify me</Heading>
            <Paragraph>When you should be notified:</Paragraph>
            <Stack>
              <Radio value="all">Every time someone quacks</Radio>
              <Radio value="mentions">Only mentions (@username)</Radio>
              <Radio value="never">Never</Radio>
            </Stack>
          </RadioGroup>
        </SettingsSection>
      </Stack>
    </>
  );
}
