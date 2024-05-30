import ReactDOM from 'react-dom';

import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import HoverModal from '@root/src/components/modal/HoverModal';

refreshOnUpdate('pages/content/injected/mouseover');

const App = () => {
  return <HoverModal />;
};

const modalRoot = document.createElement('div');
document.body.appendChild(modalRoot);
ReactDOM.render(<App />, modalRoot);
