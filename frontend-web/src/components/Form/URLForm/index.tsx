import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '..';
import theme from '../../../theme';
import { useGetUrl } from '@/hooks/useGetUrl';
import { useState } from 'react';
import FormSubmitButton from '@/components/Button/FormSubmitButton';
import * as Styled from './style';

export default function Form() {
  const [url, setUrl] = useState('');
  const { data, isLoading, error } = useGetUrl(url);

  const methods = useForm({
    mode: 'onChange', // 폼의 유효성을 입력이 변경될 때마다 검사합니다.
  });

  const onSubmit = (data: { url: string }) => {
    setUrl(data.url);
  };

  if (isLoading) return <>로딩중...</>;
  if (error) return <>에러 발생</>;
  if (data) console.log('Fetched data:', data);
  return (
    <>
      <FormProvider {...methods}>
        <FormComponent>
          <Styled.InputWrapper>
            <FormComponent.Input
              placeholder="의심되는 URL을 검색해보세요."
              {...methods.register('url', {
                required: 'URL 입력은 필수입니다.',
              })}
              borderColor={theme.colors.formBorder}
            />
            <FormSubmitButton onClick={() => onSubmit({ url: methods.getValues().url })}/>
          </Styled.InputWrapper>
        </FormComponent>
      </FormProvider>
    </>
  );
}
