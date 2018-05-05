
import { renderComponent , expect, $, simulate } from '../test-helper';
import Header from '../../src/components/header';

describe('Header rendering' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  describe('renders component', () => {
    
    it('check compoment exists', () => {
        expect(component).to.exist;
    });

    it('check compoment class name', () => {
        expect(component.className).to.be.equal('header');
    });

  });

  describe('renders component lang button', () => {
    let button;
    function getFirstLangButton() {
        return $(component,'button')[0];
    }
    beforeEach(() => {
        button = getFirstLangButton();
    });

    it('check compoment lang button', () => {
        expect(button).to.exist;
    });

    it('check compoment click lang button', () => {
        expect(button.innerHTML).to.be.equal('en');
        simulate(button,'click');
        expect(getFirstLangButton().innerHTML).to.be.equal('jp');
    });
    
  });

});