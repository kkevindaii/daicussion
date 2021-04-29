import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
//   let InputOrTextarea = Input;
//   if (textarea) {
//       InputOrTextarea = Textarea; // Works since it is a conditional but... yeah
//   }
  // InputOrTextarea = !textarea ? Input : Textarea; // Terrible Fix
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {textarea ? 
      <Textarea
        {...field}
        id={field.name}
        placeholder={props.placeholder}
      ></Textarea> :
      <Input
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      ></Input>
    }
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
