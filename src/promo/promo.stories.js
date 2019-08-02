import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import promoStyles from './promo.scss';

export const sampleContent = {
  "backgroundColor": "#131060",
  "topLine": "Velit saepe quia. Ea",
  "toplineColor": "#0e681e",
  "bottomLine": "Dolorem qui aliquam",
  "bottomlineColor": "#5c2a1c",
  "_meta": {
    "schema": "https://www.amplience.com/examples/promo.json",
    "deliveryId": "29884303-abe2-4d1d-bcd0-dd5fa243386b"
  },
  "icon": {
    "id": "b22b2297-52ab-4abb-a440-9d7ef3921f5a",
    "name": "1",
    "endpoint": "dem",
    "defaultHost": "i1.adis.ws",
    "mediaType": "image",
    "_meta": {
      "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
    }
  },
  "link": {
    "label": "Aspernatur rerum aut",
    "type": "URL",
    "value": "Aut ut et et consequ",
    "_meta": {
      "schema": "https://www.amplience.com/examples/link.json"
    }
  }
};


const samplePromoListContent = {
  "_meta": {
    "schema": "https://www.amplience.com/examples/promolist.json",
    "deliveryId": "f5ad358b-15c7-4fce-bea8-52f6bdfa3311"
  },
  "promos": [
    {
      "backgroundColor": "#2e5f0d",
      "topLine": "Similique qui quod f",
      "toplineColor": "#2a4e39",
      "bottomLine": "Fuga quia eveniet oc",
      "bottomlineColor": "#5e4f6a",
      "_meta": {
        "schema": "https://www.amplience.com/examples/promo.json",
        "deliveryId": "e4c96d05-ffb3-44a7-9d07-a7ae8eae0b67"
      },
      "icon": {
        "id": "53a36410-2056-4a1c-b317-a299166894da",
        "name": "2",
        "endpoint": "dem",
        "defaultHost": "i1.adis.ws",
        "mediaType": "image",
        "_meta": {
          "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
        }
      },
      "link": {
        "label": "Soluta tempore a sim",
        "type": "URL",
        "value": "Perferendis quo eos",
        "_meta": {
          "schema": "https://www.amplience.com/examples/link.json"
        }
      }
    }
  ]
};

storiesOf('Promo', module)
  .add('Single Promo', () => renderContent('acc-template-promo', sampleContent))
  .add('Promo List', () => renderContent('acc-template-promoList', samplePromoListContent));