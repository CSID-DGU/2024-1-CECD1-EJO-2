import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '@/components/Form';
import theme from '@/theme';

export default function Form() {

  const methods = useForm({
    mode: 'onChange', // 폼의 유효성을 입력이 변경될 때마다 검사합니다.
  });
  const onSubmit = () => {
    //
  };
  return (
    <>
      <FormProvider {...methods}>
        <FormComponent>
          <FormComponent.Input
            placeholder="의심되는 URL을 검색해보세요."
            {...methods.register('url', {
              required: '',
            })}
            borderColor={theme.colors.formBorder}
          />
        </FormComponent>
      </FormProvider>
     
    </>
  );
}
