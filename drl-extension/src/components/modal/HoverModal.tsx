import { SearchResult } from '@root/src/pages/models/SearchResult';
import { getSearchResult } from '@root/src/pages/popup/dummy';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PopupResult from '../popup/result/PopupResult';
const HoverModal = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  const [url, setUrl] = useState('');

  useEffect(() => {
    if (url != '') {
      setIsSearched(true);
      setResult(getSearchResult(url));
      console.log('currentURL--', url);

      setModalStyle({
        display: 'flex',
        left: `${clientX}px`,
        top: `${clientY}px`,
        zIndex: `999999`,
      });
    }
  }, [url]);

  const [clientX, setX] = useState(0);
  const [clientY, setY] = useState(0);

  const [modalStyle, setModalStyle] = useState({ display: 'none', left: '0px', top: '0px', zIndex: '99999' });

  useEffect(() => {
    document.addEventListener('mousemove', event => {
      setX(event.clientX);
      setY(event.clientY);
    });
  });

  useEffect(() => {
    const links = document.querySelectorAll('a');

    links.forEach(linkElement => {
      linkElement.addEventListener('mouseover', () => {
        setUrl(linkElement.href);
      });

      linkElement.addEventListener('mouseleave', () => {
        console.log('mouseLeave');
        timeoutId = setTimeout(() => {
          setModalStyle(prevStyle => ({
            ...prevStyle,
            display: 'none',
          }));
          setUrl('');
        }, 1000); // 1초 뒤에 실행

        setUrl('');
      });
    });

    return () => {
      links.forEach(linkElement => {
        linkElement.removeEventListener('mouseover', () => {});
        linkElement.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div>
      <div style={{ ...modalStyle, position: 'fixed' }}>
        <ModalWrapper>{PopupResult(getSearchResult(url))}</ModalWrapper>
      </div>
    </div>
  );
};

const ModalWrapper = styled.div`
  width: 320px;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid gray;
  background-color: white;
  border-radius: 8px;
  color: black;
`;

export default HoverModal;
