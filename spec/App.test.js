import App from '../client/src/components/app.jsx';
import React from "react";
import Enzyme, { shallow } from "enzyme";

describe('App', () => {
  it('should show text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div div');
    expect(text.text()).toBe('GET THE FULL LOOK');
  });
})