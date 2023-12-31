import { type ReactNode } from 'react';
import { type ControllerRenderProps, useController } from 'react-hook-form';

import { Field, type FieldProps } from 'src/shared/design-system';

type BaseProps = Pick<FieldProps, 'id' | 'label'> & {
  name: string;
};

export type FormFieldBaseProps<TInputProps> = BaseProps &
  Omit<TInputProps, keyof BaseProps>;

export type FormFieldProps = BaseProps &
  Pick<FieldProps, 'isRequired'> & {
    children: (controller: ControllerRenderProps) => ReactNode;
  };

export function FormField({ name, children, ...restProps }: FormFieldProps) {
  const controller = useController({ name });

  const error = controller?.fieldState?.error?.message;

  return (
    <Field error={error} {...restProps}>
      {children(controller.field)}
    </Field>
  );
}
