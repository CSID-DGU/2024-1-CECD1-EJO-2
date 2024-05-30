import { SearchResult } from '@root/src/pages/models/SearchResult';
import { getSearchResult } from '@root/src/pages/popup/dummy';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PopupResult from '../popup/result/PopupResult';

const HoverModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientX, setX] = useState(0);
  const [clientY, setY] = useState(0);

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  const links = document.querySelectorAll('a');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    document.addEventListener('mousemove', event => {
      setX(event.clientX);
      setY(event.clientY);
    });

    links.forEach(linkElement => {
      linkElement.addEventListener('mouseover', () => {
        console.log('mouseover');
        setUrl(linkElement.href);
        clearTimeout(timer);
        setModalStyle(prevStyle => ({ ...prevStyle, opacity: 1, transition: 'opacity 0.2s' }));
      });

      linkElement.addEventListener('mouseleave', () => {
        console.log('mouseLeave');
        setModalStyle(prevStyle => ({ ...prevStyle, opacity: 0, transition: 'opacity 2s' }));

        console.log('1');
        timer = setTimeout(() => {
          setModalStyle(prevStyle => ({
            ...prevStyle,
            visibility: 'hidden',
          }));
          setUrl('');
          setIsModalOpen(false);
        }, 2000);
      });
    });

    return () => {
      links.forEach(linkElement => {
        linkElement.removeEventListener('mouseover', () => {});
        linkElement.removeEventListener('mouseleave', () => {});
      });
      document.removeEventListener('mousemove', () => {});
    };
  }, []);

  const [isSearched, setIsSearched] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!isModalOpen) {
      if (url !== '') {
        setIsSearched(true);
        setResult(getSearchResult(url));
        console.log('currentURL--', url);

        setModalStyle({
          ...modalStyle,
          opacity: 1,
          visibility: 'visible',
          left: `${clientX}px`,
          top: `${clientY}px`,
        });
        setIsModalOpen(true);
      }
    }
  }, [url]);

  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({
    opacity: 1,
    transition: 'opacity 0.2s',
    visibility: 'hidden',
    left: '0px',
    top: '0px',
    zIndex: '99999',
  });

  return (
    <div style={{ ...modalStyle, position: 'fixed' }}>
      <ModalWrapper>{PopupResult(getSearchResult(url))}</ModalWrapper>
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
