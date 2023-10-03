import { Switch, type SwitchProps } from 'src/shared/design-system';

import { FormField, type FormFieldBaseProps } from '../FormField';

export type SwitchFieldProps = FormFieldBaseProps<SwitchProps>;

export function SwitchField({
  id,
  name,
  label,
  ...inputProps
}: SwitchFieldProps) {
  return (
    <FormField
      id={id}
      name={name}
      label={label}
      isRequired={inputProps.isRequired}
    >
      {({ value, ...field }) => (
        <Switch isChecked={value} {...inputProps} {...field} />
      )}
    </FormField>
  );
}
