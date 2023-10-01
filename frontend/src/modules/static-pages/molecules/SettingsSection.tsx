import { type ReactNode } from 'react';
import { type FieldValues } from 'react-hook-form';

import {
  Box,
  Button,
  Heading,
  Paragraph,
  Stack,
} from 'src/shared/design-system';
import { Form, type FormProps } from 'src/shared/forms';

export type SettingsSectionProps<
  TFieldValues extends FieldValues = FieldValues,
> = {
  formProps: Omit<FormProps<TFieldValues>, 'children'>;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export function SettingsSection<
  TFieldValues extends FieldValues = FieldValues,
>({
  formProps,
  title,
  description,
  children,
}: SettingsSectionProps<TFieldValues>) {
  return (
    <Form {...formProps}>
      <Heading>{title}</Heading>
      {description && <Paragraph>{description}</Paragraph>}
      <Stack p="8" bg="white">
        {children}
        <Box textAlign="right">
          <Button type="submit">Save</Button>
        </Box>
      </Stack>
    </Form>
  );
}
