import _ from 'lodash';
import React from 'react';
import { translate, Trans } from 'react-i18next';

class Header extends React.Component {
    renderButtons() {
        let langs = ['en','jp','pt'];
        const i18n = this.props.i18n;
        _.remove(langs,function(n) {
            return n === i18n.language;
        });
        return _.map(langs,function(lang) {
            return <button key={lang} onClick={()=>{i18n.changeLanguage(lang)}} >{lang}</button>;
        });
    }
    render() {
        return (
            <div className="header">
              <h1> <Trans>header</Trans> </h1>
              {this.renderButtons()}
            </div>
        );
    }
}

export default translate('translations')(Header);