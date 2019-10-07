import React from 'react';
import {
  render,
  waitForElement
} from '@testing-library/react';
import Item from '../Item';

import {
  fetchItemById
} from '../../../Resources/Resources'

jest.mock('../../../Resources/Resources', () => {
  return {
    fetchItemById: jest.fn(),
  }
})

const mockFetchItem = {
  data: {
    "author": {
      "name": "Rafael",
      "lastname": "Bernardo"
    },
    "item": {
      "id": "MLA816466001",
      "title": "Xiaomi Redmi Note 7 Dual Sim 128 Gb Dream Blue",
      "price": {
        "currency": "ARS",
        "amount": 50,
        "decimals": 25699
      },
      "picture": "http://mla-s2-p.mlstatic.com/936457-MLA31238918796_062019-O.jpg",
      "condition": "new",
      "free_shipping": true,
      "sold_quantity": 0,
      "description": "Procesador:\nEl uso de Snapdragon™ 660 significa que Redmi Note 7 ha alcanzado un estatus casi flagship. Además, esta edición especial del procesador con IA proporciona una velocidad de reloj de la CPU más rápida para un funcionamiento increíblemente suave y juegos con alta capacidad de respuesta.\n\nPantalla:\nLa pantalla con notch de gota se ha convertido en una solución común para maximizar la visualización de la pantalla gracias a la forma en la que aloja la cámara frontal. Con una resolución de 2340 x 1080, esta pantalla supera a la mayoría de los televisores de alta definición. En conjunto, este teléfono tiene una pantalla de gran tamaño que mantiene su claridad hasta en los detalles más pequeños.\n\nCámara:\nCámara a nivel de un flagship. Cuantos más píxeles, más clara será la imagen. Redmi Note 7 utiliza un sensor de 48MP, es decir, con cuatro veces más número de píxeles que un teléfono típico de 12MP. Equipada con un gran sensor de 1/2 pulgada, la cámara puede capturar más luz en entornos más oscuros originando fotos más brillantes con menos ruido. ¡Se acabó el uso del trípode, el poder lo tienes ahora tú!\n\nGran duración de la batería:\nUna batería ultragrande significa una resistencia ultralarga y una carga súper rápida. Este es el tipo de poder que estás acostumbrado a ver en los modelos flagship.\n\n4 veces más resistente a caídas:\nEste smartphone esta equipado con Corning Gorilla Glass 5, que es 4 veces más resistente que las generaciones anteriores. Asimismo, cuenta con métodos innovadores de refuerzo para proteger las esquinas."
    }
  }
}

describe('Item', () => {

  describe('smoke tests', () => {
    test('should render NotFound component', async () => {
      fetchItemById.mockResolvedValue({});
      const {
        getByText
      } = render( <Item itemId = "XXX123" /> );

      await waitForElement(() => getByText(/No podemos encontrar/i));
    });
  });

  describe('when search is successful', () => {
    test('should render a product showcase', async () => {
      fetchItemById.mockResolvedValue(mockFetchItem);
      const {
        getByText
      } = render( <Item itemId = "XXX123" /> );

      await waitForElement(() => getByText(/Xiaomi Redmi Note 7/i));
      await waitForElement(() => getByText(/25699/i));
      await waitForElement(() => getByText(/Procesador: El uso de Snapdragon/i));
    })
  });

  describe('when search is unsuccessful', () => {
    test('should render a product notFound message', async () => {
      fetchItemById.mockResolvedValue({});
      const {
        getByText
      } = render( <Item /> );

      await waitForElement(() => getByText(/No podemos encontrar el elemento buscado/i));
    })
  });
})
