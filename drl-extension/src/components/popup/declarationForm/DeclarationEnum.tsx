export const declarationOptions = [
  { value: 'popup', description: '불필요한 팝업창이 많이 떠요.' },
  { value: 'other', description: '특정 다른 사이트로 유도돼요.' },
  { value: 'contents', description: '불건전한 컨텐츠가 담겨있어요.' },
];

export const declarationReasonToOption = (reason: String) => {
  switch (reason) {
    case 'popup':
      return '불필요한 팝업창이 많이 떠요.';
    case 'other':
      return '특정 다른 사이트로 유도돼요.';
    case 'contents':
      return '불건전한 컨텐츠가 담겨있어요.';
    default:
      return 'error';
  }
};
