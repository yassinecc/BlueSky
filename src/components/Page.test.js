import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Page from './Page';

describe('Page', () => {
  it('should render the page', () => {
    const tree = renderer
      .create(
        <Page>
          <Text>Hello</Text>
        </Page>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
