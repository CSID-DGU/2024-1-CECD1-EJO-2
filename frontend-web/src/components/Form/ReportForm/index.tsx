import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '..';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from './style';
import FormSubmitButton from '@/components/Button/FormSubmitButton';
import { usePostReportUrl } from '@/hooks/usePostReportUrl';

interface IReportFormFields {
  reportOption: string;
  url: string;
}

export default function ReportForm() {

  const validationSchema = yup.object().shape({
    reportOption: yup.string().required('신고사유를 선택하세요'),
    url: yup.string().required('url을 입력하세요'),
  });

  const methods = useForm<IReportFormFields>({
    mode: 'onChange',
    defaultValues: {
      reportOption: '',
      url: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    // 데이터를 제출할 때 오류가 없는지 검사
    if (methods.formState.errors.reportOption) {
      //
    } else {
      //
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <FormComponent>
          <FormComponent.Label htmlFor="reportOption">악성 URL 신고하기</FormComponent.Label>
          <Styled.InputWrapper>
            <FormComponent.Input
              placeholder="의심되는 URL을 작성해주세요."
              {...methods.register('url', {
                required: '',
              })}
              borderColor="none"
              width='70%'
            />
            <FormSubmitButton />
          </Styled.InputWrapper>
        </FormComponent>
      </FormProvider>
    </>
  );
}