import { useEffect } from 'react';
import useCountdown from './useCountdown';
import { useState } from 'react';
import styled from 'styled-components';

import PopupResult from '../popup/result/PopupResult';
import { useRef } from 'react';

import icon_search from './icon/search.svg';

const HoverCountdown = () => {
  const [_url, _setUrl] = useState<string>('');
  const url = useRef(_url);
  const setUrl = (value: string) => {
    url.current = value;
    _setUrl(value);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  const getIsModalOpen = isModalOpen ? 'visible' : 'hidden';

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const { countdown, startCountdown, stopCountdown } = useCountdown(3, () => {
    setIsSearched(true);
  });

  const getAnchorElement = (target: EventTarget): HTMLAnchorElement | null => {
    const element = target as HTMLElement;

    if (element.tagName === 'A') {
      return element as HTMLAnchorElement;
    }

    const parentNode = element.parentNode as HTMLElement;
    if (parentNode && parentNode.tagName === 'A') {
      return parentNode as HTMLAnchorElement;
    }

    return null;
  };

  const handleMouseEnter = (event: MouseEvent) => {
    let element = getAnchorElement(event.target);

    if (element != null) {
      if (element.href != undefined && element.href != '' && element.href != url.current) {
        setPosition({ x: event.clientX, y: event.clientY });
        element.style.backgroundColor = 'yellow';

        setUrl(element.href);
        startCountdown();
        setIsModalOpen(true);
        setIsSearched(false);
      }
    }
  };

  const handleMouseLeave = (event: MouseEvent) => {
    let element = getAnchorElement(event.target);

    element.style.backgroundColor = '';
    setUrl('');
    stopCountdown();
    setIsModalOpen(false);
    setIsSearched(false);
  };

  useEffect(() => {
    console.log('currentURL:', url.current);
  }, [url]);

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x + 5}px`,
        top: `${position.y + 5}px`,
        zIndex: '9999999999',
        visibility: getIsModalOpen,
      }}>
      {isSearched ? (
        <ModalWrapper className="">
          <PopupResult url={url.current} />
        </ModalWrapper>
      ) : (
        <ModalWrapperLoading className="ani_fadein">
          <ResultTitle>
            <img src={icon_search} alt="Dangerous site" />
            <ResultLabel className="B1 dangerous">{countdown}초 뒤 분석이 진행됩니다.</ResultLabel>
          </ResultTitle>
          <UrlLabel className="B2">{url.current}</UrlLabel>
        </ModalWrapperLoading>
      )}
    </div>
  );
};

export default HoverCountdown;

const ModalWrapperLoading = styled.div`
  max-width: 320px;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid gray;
  background-color: white;
  border-radius: 8px;
  color: black;

  animation: fadein 3s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalWrapper = styled.div`
  max-width: 320px;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid gray;
  background-color: white;
  border-radius: 8px;
  color: black;
`;

const ResultTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .img {
    width: 20px;
    height: 20px;
  }

  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;

const ResultLabel = styled.div`
  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;

const UrlLabel = styled.div`
  .B2 {
    letter-spacing: -0.25px;
    font-family: Pretendard-Regular;
    font-size: 0.875rem;
    line-height: calc(24 / 14);
  }

  word-break: break-all;

  color: lightgray;
`;
