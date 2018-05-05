import React from 'react';
import { translate, Trans } from 'react-i18next';

class Home extends React.Component {
    render() {
      const { t, i18n } = this.props;
      return (
        <div className="home">
           <h1> <Trans>welcome</Trans></h1>
        </div>
      );
    }
  }
  
  export default translate('translations')(Home);