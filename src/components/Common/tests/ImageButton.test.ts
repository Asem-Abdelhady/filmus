import renderer from 'react-test-renderer';
import ImageButton from '../ImageButton';

it('renders the image button', () => {
  const component = renderer.create(
    <ImageButton src="src" width={100}></ImageButton>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});