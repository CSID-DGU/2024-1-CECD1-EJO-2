import PageLayout from '@/components/PageLayout';
import * as Styled from './style';
import URLForm from '@/components/Form/URLForm';
import ReportForm from '@/components/Form/ReportForm';

export default function Home() {

    return (
        <>
            <PageLayout overflowY="auto">
                <Styled.Title>
                    악성 URL 검색
                </Styled.Title>
                <Styled.Discription>
                    {`개인정보 관리를 우해 악성 URL을 검색한 후 이용해보세요. \n
                    수많은 데이터를 바탕으로 구축된 AI가 검증을 도와줍니다.`}
                </Styled.Discription>
                <URLForm/>
                <Styled.Text>
                    지금까지 1,400,000번의 겁색이 있었어요.
                </Styled.Text>
                <Styled.ReportWrapper>
                    <ReportForm />
                </Styled.ReportWrapper>
            </PageLayout>
        </>
    );
}
