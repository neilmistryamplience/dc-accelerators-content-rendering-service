import {
  storiesOf
} from '@storybook/html';

import {
  renderContent
} from '../../.storybook/rendering-service';

const components = [
  ['Banner', 'banner'],
  ['Blog Post', 'blogPost'],
  ['Card', 'card'],
  ['Card List', 'cardList'],
  ['External Block', 'externalBlock'],
  ['Image', 'image'],
  ['Page', 'page'],
  ['Promo', 'promo'],
  ['SFCC Slot', 'sfccSlot'],
  ['Slider', 'slider'],
  ['Split Block', 'splitBlock'],
  ['Text', 'text'],
  ['Video', 'video']
];

const stories = storiesOf('Template Chooser', module);

components.forEach(([label, name]) => {
  stories.add(label, () => renderContent('templateChooser', require(`../${name}/${name}.stories`).sampleContent));
});