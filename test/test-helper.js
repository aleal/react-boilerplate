import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from '../src/reducers';
import i18n from '../src/i18n';

const html = '<!DOCTYPE html><html><body></body></html>';
global.window = new jsdom.JSDOM(html).window;
global.document = global.window.document;
global.navigator = global.window.navigator;

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <I18nextProvider i18n={i18n} >
        <MemoryRouter>
          <ComponentClass {...props} />
        </MemoryRouter>
      </I18nextProvider>
    </Provider>
  );
  const domElement = ReactDOM.findDOMNode(componentInstance);
  return domElement;
}

// nothing special, it just wraps querySelector
function $(domElement, selector) {
    return domElement.querySelectorAll(selector);
}

function simulate(domElement, eventName, value = null) {
    if(!_.isNull(value)) {
      domElement.value = value;
    }
    TestUtils.Simulate[eventName](domElement);
}; 

export {renderComponent, expect, $, simulate};

