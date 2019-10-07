import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  describe('smoke tests', () => {
    test('should render component with Loading', () => {
      const component = render(<Loading/>);

      expect(component).toMatchSnapshot();
    })
  });
})


