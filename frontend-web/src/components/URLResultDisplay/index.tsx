import React from 'react';
import * as Styled from './style';

type APIResponse = {
    is_malicious: boolean;
    description: 'BENIGN' | 'MALICIOUS' | 'DEFACEMENT' | 'MALWARE';
};

interface IURLResultDisplayProps {
    isLoading: boolean;
    error: Error | null;
    data: APIResponse | null;
};

export default function URLResultDisplay({ isLoading, error, data }: IURLResultDisplayProps) {
    if (isLoading) {
        return <Styled.URLResult color="blue">분석중입니다.</Styled.URLResult>;
    } else if (error) {
        return <Styled.URLResult color="red">분석 도중에 에러가 발생했습니다.</Styled.URLResult>;
    } else if (data) {
        return data.is_malicious ?
            <Styled.URLResult color="red">피싱사이트입니다. 주의하세요.</Styled.URLResult> :
            <Styled.URLResult color="green">안전한 사이트입니다.</Styled.URLResult>;
    } else {
        return null; // No data yet, display nothing
    }
};
