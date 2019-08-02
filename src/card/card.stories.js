import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

import cardStyles from './card.scss';

export const sampleContent = {
  "name": "Aliquid qui sequi mo",
  "_meta": {
    "schema": "https://www.amplience.com/examples/card.json",
    "deliveryId": "a80d79f3-41b0-4c84-95f3-bd45b973fad7"
  },
  "image": {
    "imageAltText": "Atque nihil blanditi",
    "seoText": "Rem officia tempore.",
    "_meta": {
      "schema": "https://www.amplience.com/examples/image.json"
    },
    "image": {
      "id": "a5807338-b004-4b1c-a8bf-4f861a94ad6a",
      "name": "3",
      "endpoint": "dem",
      "defaultHost": "i1.adis.ws",
      "mediaType": "image",
      "_meta": {
        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
      }
    },
    "roundel": []
  }
}

/*export const sampleContent = {
  "@id": "http://content.cms.amplience.com/29bd9901-691f-4f35-adb2-ad93c85cd01b",
  "_meta": {
    "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/card.json",
    "name": "accelerator-card-1"
  },
  "image": {
    "@id": "http://content.cms.amplience.com/ece6b9f2-b58a-4420-937d-a05e9970a459",
    "@type": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json",
    "_meta": {
      "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/image.json",
      "name": "accelerator-image-card-1"
    },
    "image": {
      "@id": "http://image.cms.amplience.com/293fae56-2d8f-459e-b375-b65e524d3c69",
      "_meta": {
        "schema": "http://bigcontent.io/cms/schema/v1/core#/definitions/image-link"
      },
      "id": "293fae56-2d8f-459e-b375-b65e524d3c69",
      "name": "pexels-photo-128939",
      "endpoint": "csdemo",
      "defaultHost": "i1.adis.ws",
      "mediaType": "image"
    },
    "roundel": [],
    "imageAltText": "alt txt",
    "seoText": "seo txt"
  },
  "name": "Card 1",
  "link": {
    "value": "http://google.com",
    "_meta": {
      "schema": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/link.json"
    },
    "label": "link card 1"
  },
  "description": "Card 1 description",
  "@type": "https://dev-solutions.s3.amazonaws.com/DynamicContentTypes/Accelerators/card.json"
};*/

storiesOf('Card', module)
  .add('Example content', () => renderContent('acc-template-card', sampleContent));