import ReactDOM from 'react-dom';

import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import HoverCountdown from '@root/src/components/modal/HoverCountdown';

refreshOnUpdate('pages/content/injected/mouseover');

const App = () => {
  // return <HoverModal />;
  return <HoverCountdown />;
};

const modalRoot = document.createElement('div');
document.body.appendChild(modalRoot);
ReactDOM.render(<App />, modalRoot);
