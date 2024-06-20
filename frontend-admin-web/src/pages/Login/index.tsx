import * as Styled from './style'
import PageLayout from '@/components/PageLayout'
import { FormProvider, useForm } from 'react-hook-form';
import { FormComponent } from '@/components/Form';
import LoginButton from '@/components/Button/LoginButton';
import theme from '@/theme';
import { useNavigate } from 'react-router-dom';

type TLoginForm = {
  id: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const methods = useForm({
    mode: 'onChange', // 폼의 유효성을 입력이 변경될 때마다 검사합니다.
  });

  const onSubmit = (data: TLoginForm) => {
    if(data.id === 'admin' && data.password === 'admin') {
      navigate('/reported')
    }
  };

  return (
    <PageLayout>
      <FormProvider {...methods}>
        <FormComponent>
          <Styled.ColumnContainer>
            <FormComponent.Input
              placeholder="ID"
              {...methods.register('id', {
                required: 'ID를 입력해주세요.',
              })}
              borderColor={theme.colors.formBorder}
            />
            <FormComponent.Input
              placeholder="Password"
              type="password"
              {...methods.register('password', {
                required: 'Password를 입력해주세요.',
              })}
              borderColor={theme.colors.formBorder}
            />
            <LoginButton onClick={() => onSubmit({
              id: methods.getValues().id,
              password:  methods.getValues().password,
            })}/>
          </Styled.ColumnContainer>
        </FormComponent>
      </FormProvider>
    </PageLayout>
  )
}
