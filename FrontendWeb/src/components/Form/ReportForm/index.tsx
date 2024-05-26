import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '@/components/Form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import theme from '@/theme';

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

  // 모든 필수 입력 필드의 유효성을 검사
  const isFormValid = methods.formState.isValid;

  return (
    <>
      <FormProvider {...methods}>
        <FormComponent alignItems='center'>
          <FormComponent.Label htmlFor="reportOption">악성 URL 신고하기</FormComponent.Label>
          <FormComponent.Dropdown
            name="reportOption"
            options={[
              { value: 'option1', label: '불필요한 팝업창이 많이 떠요.' },
              { value: 'option2', label: '특정 다른 사이트로 유도 되요.' },
              { value: 'option3', label: '불건전한 컨텐츠가 담겨있어요.' },
            ]}
            placeholder="신고사유를 선택하세요"
          />
          <FormComponent.Input
            placeholder="의심되는 URL을 작성해주세요."
            {...methods.register('url', {
              required: '',
            })}
            borderColor="none"
            width='70%'
          />
        </FormComponent>
      </FormProvider>
    </>
  );
}
