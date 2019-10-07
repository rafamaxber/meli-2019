import React from 'react';
import {
  render,
  waitForElement
} from '@testing-library/react';
import Items from '../Items';

import {
  searchItems
} from '../../../Resources/Resources'

jest.mock('../../../Resources/Resources', () => {
  return {
    searchItems: jest.fn(),
  }
})

const mockFetchItem = {
  data: {
    "author": {
      "name": "Rafael",
      "lastname": "Bernardo"
    },
    "categories": ["Celulares y Teléfonos", "Celulares y Smartphones"],
    "items": [{
      "id": "MLA816466001",
      "title": "Xiaomi Redmi Note 7 Dual Sim 128 Gb Dream Blue",
      "price": {
        "currency": "ARS",
        "amount": 50,
        "decimals": 25699
      },
      "address": {
        "state_name": "Capital Federal"
      },
      "picture": "http://mla-s2-p.mlstatic.com/936457-MLA31238918796_062019-I.jpg",
      "condition": "new",
      "free_shipping": true
    }, {
      "id": "MLA795314745",
      "title": "Xiaomi Redmi Note 7 Dual Sim 32 Gb Dream Blue",
      "price": {
        "currency": "ARS",
        "amount": 1,
        "decimals": 16199.97
      },
      "address": {
        "state_name": "Capital Federal"
      },
      "picture": "http://mla-s2-p.mlstatic.com/843190-MLA31238988780_062019-I.jpg",
      "condition": "new",
      "free_shipping": true
    }, {
      "id": "MLA817237049",
      "title": "Xiaomi Redmi Note 7 Dual Sim 128 Gb Bright Black",
      "price": {
        "currency": "ARS",
        "amount": 1,
        "decimals": 19999.99
      },
      "address": {
        "state_name": "Buenos Aires"
      },
      "picture": "http://mla-s2-p.mlstatic.com/836685-MLA31182385621_062019-I.jpg",
      "condition": "new",
      "free_shipping": true
    }, {
      "id": "MLA817178624",
      "title": "Xiaomi Redmi Note 7 Dual Sim 64 Gb Dream Blue (4 Gb Ram)",
      "price": {
        "currency": "ARS",
        "amount": 1,
        "decimals": 16599
      },
      "address": {
        "state_name": "Capital Federal"
      },
      "picture": "http://mla-s1-p.mlstatic.com/693053-MLA31238988778_062019-I.jpg",
      "condition": "new",
      "free_shipping": true
    }]
  }
}

describe('Items', () => {

  describe('smoke tests', () => {
    test('should render NotFound component', async () => {
      searchItems.mockResolvedValue({});
      const {
        getByText
      } = render( <Items searchText="redmi note 7" /> );

      await waitForElement(() => getByText(/No podemos encontrar/i));
    });
  });

  describe('when search is successful', () => {
    test('should render a product showcase', async () => {
      searchItems.mockResolvedValue(mockFetchItem);
      const {
        getAllByText
      } = render( <Items searchText="redmi note 7" /> );

      await waitForElement(() => getAllByText(/Xiaomi Redmi Note 7/i));
      await waitForElement(() => getAllByText(/25699/i));
    })
  });

  describe('when search is successful but return empty', () => {
    test('should render a product notFound message', async () => {
      searchItems.mockResolvedValue([]);
      const {
        getByText
      } = render( <Items /> );

      await waitForElement(() => getByText(/No podemos encontrar el elemento buscado/i));
    })
  });

  describe('when search is unsuccessful', () => {
    test('should render a product notFound message', async () => {
      searchItems.mockResolvedValue({});
      const {
        getByText
      } = render( <Items /> );

      await waitForElement(() => getByText(/No podemos encontrar el elemento buscado/i));
    })
  });
})
