import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchScreen } from '../SearchScreen';

describe('SearchScreen', () => {

  test('displays search results', async () => {
    const results = [{title: 'Result 1'}, {title: 'Result 2'}];
    
    const { getByText } = render(<SearchScreen results={results} />);
    
    expect(getByText('Result 1')).toBeTruthy();
    expect(getByText('Result 2')).toBeTruthy();
  });

  test('calls onSearch when search button pressed', async () => {
    const onSearch = jest.fn();
    
    const { getByTestId } = render(<SearchScreen onSearch={onSearch} />);
    
    fireEvent.press(getByTestId('search-button'));
    
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

});