import React from 'react';
import {shallow} from 'enzyme/build';
import App from './App';


it('mounts without crashing', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount()
});
it('mounts without crashing2', () => {
  const wrapper = shallow(<App />);
  wrapper.unmount()
});

