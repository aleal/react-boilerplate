
import { renderComponent , expect, $, simulate } from '../test-helper';
import App from '../../src/components/app';

describe('App rendering' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  describe('renders component', () => {
    
    it('check compoment exists', () => {
        expect(component).to.exist;
    });

    it('check compoment class name', () => {
        expect(component.className).to.be.equal('app');
    });

    it('check header compoment', () => {
        expect($(component,'.header')[0]).to.exist;
    });
  });
});