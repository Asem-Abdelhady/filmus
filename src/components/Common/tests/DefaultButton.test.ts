import renderer from 'react-test-renderer';
import DefaultButton from '../DefaultButton';

it('renders the default button', () => {
  const component = renderer.create(
    <DefaultButton text="text" ></DefaultButton>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});