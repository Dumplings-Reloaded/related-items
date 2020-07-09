import ItemList from '../client/src/components/ItemList.jsx';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';

describe('ItemList', () => {
  it('should render item name, category, and price', () => {
    let product = {
      name: 'Some super cool leggings you should buy',
      cat: 'Only the best',
      price: '100000'
    };

    const wrapper = shallow(<ItemList product={product}/>);

    const name = wrapper.find('.carousel-name').text();
    const cat = wrapper.find('.carousel-cat').text();
    const price = wrapper.find('.carousel-price').text();

    expect(name).toBe('Some super cool leggings you should buy -');
    expect(cat).toBe('Only the best');
    expect(price).toBe('$100000');
  });
});