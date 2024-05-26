import React from 'react';
import { useFormContext } from 'react-hook-form';
import * as Styled from './style';

interface Props {
  children: React.ReactNode;
  alignItems?: string;
}

export interface IFormInputStyleProps {
  alignItems?: string;
  padding?: string;
  margin?: string;
  width?: string;
  borderColor?: string;
}

function FormComponent({ children, alignItems }: Props) {
  const methods = useFormContext();
  return <Styled.Form alignItems={alignItems} onSubmit={methods.handleSubmit(data => console.log(data))}>
    {children}
  </Styled.Form>;}

function FormInput({ name, placeholder, ...formInputStyleProps }: { name: string; placeholder: string; } & IFormInputStyleProps) {
  const { register } = useFormContext();
  return <Styled.Input {...register(name, { required: true })} placeholder={placeholder} {...formInputStyleProps} />
  ;
}

function FormLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return <Styled.Label htmlFor={htmlFor}>{children}</Styled.Label>;
}

function FormText({ children }: { children: React.ReactNode }) {
  return <Styled.Text>{children}</Styled.Text>;
}

function FormDropdown({
  name,
  options,
  placeholder,
}: {
  name: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
}) {
  const { register } = useFormContext();
  return (
    <Styled.StyledSelect {...register(name)}>
      <Styled.StyledOption value="">{placeholder}</Styled.StyledOption>
      {options.map(option => (
        <Styled.StyledOption key={option.value} value={option.value}>
          {option.label}
        </Styled.StyledOption>
      ))}
    </Styled.StyledSelect>
  );
}

FormComponent.Input = FormInput;
FormComponent.Label = FormLabel;
FormComponent.Text = FormText;
FormComponent.Dropdown = FormDropdown;

export { FormComponent, FormInput, FormLabel, FormText, FormDropdown };
