import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '..';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from './style';
import FormSubmitButton from '@/components/Button/FormSubmitButton';
import { usePostReportUrl } from '@/hooks/usePostReportUrl';
import { TReportFormFields } from '@/types/url';
import { urlPattern } from '@/utils/urlPattern';

const options = [
  { value: 'Phishing', label: '피싱' },
  { value: 'Defacement', label: '사이트 변조' },
  { value: 'Malware', label: '멀웨어' },
];

/** 신고 폼 */
export default function ReportForm() {
  const { mutate } = usePostReportUrl();

  const validationSchema = yup.object().shape({
    reportOption: yup.string().required('신고사유를 선택하세요'),
    url: yup.string().matches(urlPattern, '유효한 URL을 입력해주세요').required('URL을 입력하세요'),
  });

  const methods = useForm<TReportFormFields>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = methods.handleSubmit((formData) => {
    mutate(formData, {
      onSuccess: () => {
        alert("신고가 완료되었습니다. 감사합니다!");
      },
      onError: () => {
        alert("신고에 실패했습니다. 다시 시도해주세요.");
      }
    });
  });

  const { errors } = methods.formState;

  return (
    <>
      <FormProvider {...methods}>
        <FormComponent onSubmit={onSubmit}>
          <FormComponent.Label htmlFor="reportOption">악성 URL 신고하기</FormComponent.Label>
          <FormComponent.Dropdown 
            name="reportOption"
            options={options}
            placeholder="신고 사유를 선택하세요"
          />
          <Styled.InputWrapper>
            <FormComponent.Input
              name="url"
              placeholder="의심되는 URL을 작성해주세요."
              borderColor="none"
              width='70%'
            />
            <FormSubmitButton type="submit" />
          </Styled.InputWrapper>
          {errors.url && <Styled.ErrorMessage style={{ color: 'red' }}>{errors.url.message}</Styled.ErrorMessage>}
        </FormComponent>
      </FormProvider>
    </>
  );
}
