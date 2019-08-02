import {
  storiesOf
} from '@storybook/html';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import {
  renderContent
} from '../../.storybook/rendering-service';

import bannerStyles from './banner.scss';

export const sampleContent = {
  "header": "Doloremque itaque et",
  "subheader": "Dolorum ipsum labore",
  "description": "Voluptate molestiae",
  "textPositionLeft": "Hic",
  "textPositionTop": "Min",
  "textColor": "rgb(255, 0, 0)",
  "bannerColor": "rgb(255, 255, 0)",
  "bannerOpacity": 0.1,
  "style": "Quibusdam maxime ea",
  "stackMobileLayout": false,
  "_meta": {
    "schema": "https://www.amplience.com/examples/banner.json",
    "deliveryId": "71317940-e0c8-41a6-8794-a100606f886d"
  },
  "link": {
    "label": "Fuga eos assumenda e",
    "type": "Product SKU",
    "value": "Voluptatum ut et. Qu",
    "_meta": {
      "schema": "https://www.amplience.com/examples/link.json"
    }
  },
  "image": {
    "imageAltText": "Debitis laborum dist",
    "seoText": "Vel veritatis rerum",
    "_meta": {
      "schema": "https://www.amplience.com/examples/image.json"
    },
    "image": {
      "id": "7bb5f460-0c3f-4369-9df9-8866dcf99dfa",
      "name": "4",
      "endpoint": "dem",
      "defaultHost": "i1.adis.ws",
      "mediaType": "image",
      "_meta": {
        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
      }
    },
    "roundel": [
    ]
  }
};

storiesOf('Banner', module)
  .add('Example Content', () => renderContent('acc-template-banner', sampleContent));