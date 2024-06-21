export const declarationOptions = [
  { value: 'Phishing', description: '이 사이트는 피싱 사이트입니다.' },
  { value: 'Defacement', description: '이 사이트는 해킹되어 원래 내용이 변조되었습니다.' },
  { value: 'Malware', description: '이 사이트는 악성코드를 포함하고 있습니다.' },
];

export const declarationReasonToOption = (value: String) => {
  const option = declarationOptions.find(option => option.value === value);
  return option ? option.description : '해당하는 설명이 없습니다.';
};
