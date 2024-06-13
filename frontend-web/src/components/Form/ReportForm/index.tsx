import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '..';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from './style';
import FormSubmitButton from '@/components/Button/FormSubmitButton';
import { usePostReportUrl } from '@/hooks/usePostReportUrl';
import { TReportFormFields } from '@/types/url';

const options = [
  { value: 'Phishing', label: '피싱' },
  { value: 'Defacement', label: '사이트 변조' },
  { value: 'Benign', label: '악성코드' },
  { value: 'Malware', label: '멀웨어' },
];

export default function ReportForm() {
  const { mutate } = usePostReportUrl();

  const validationSchema = yup.object().shape({
    reportOption: yup.string().required('신고사유를 선택하세요'),
    url: yup.string().required('url을 입력하세요'),
  });

  const methods = useForm<TReportFormFields>({
    mode: 'onChange',
    defaultValues: {
      reportOption: '',
      url: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (formData: TReportFormFields) => {
    mutate(formData, {
      onSuccess: (response) => {
        alert("신고가 완료되었어요. 감사합니다!")
      },
      onError: (error) => {
        alert("신고에 실패했어요. 다시 시도해주세요.")
      }
    });
  };
  
  return (
    <>
      <FormProvider {...methods}>
        <FormComponent>
          <FormComponent.Label htmlFor="reportOption">악성 URL 신고하기</FormComponent.Label>
          <FormComponent.Dropdown 
            name={'reportOption'} 
            options={options} 
            placeholder="신고 사유를 선택하세요" 
          />
          <Styled.InputWrapper>
            <FormComponent.Input
              placeholder="의심되는 URL을 작성해주세요."
              {...methods.register('url')}
              borderColor="none"
              width='70%'
            />
            <FormSubmitButton onClick={() => onSubmit(methods.getValues())}/>
          </Styled.InputWrapper>
        </FormComponent>
      </FormProvider>
    </>
  );
  
}