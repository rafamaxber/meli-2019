import React from 'react';
import { render } from '@testing-library/react';
import BreadCrumbs from './BreadCrumbs';

describe('BreadCrumbs', () => {
  describe('smoke tests', () => {
    test('should render nothing', () => {
      const component = render(<BreadCrumbs />);

      expect(component).toMatchSnapshot();
    })

    test('should render component with breadcrumbs', () => {
      const component = render(<BreadCrumbs steps={['Step 1', 'Step 2', 'Step 3']}/>);

      expect(component).toMatchSnapshot();
    })
  });
})


