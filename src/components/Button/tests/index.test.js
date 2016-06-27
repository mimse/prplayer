import Button from '../index';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<button/>', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <Button>
        {children}
      </Button>
    );
    expect(renderedComponent.constains(children)).toEqual(true);
  });
});