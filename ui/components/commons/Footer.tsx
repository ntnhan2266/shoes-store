import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import * as classes from '@assets/styles/components/footer.module.scss';

interface Props {

}

const Footer: React.FC<Props> = (props: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.footerInfo}>
        <div className="container">
          <div className="row">
            <div className={`${classes.footerColumn} col-md-4`}>
              <header className={classes.footerHeader}>
                {t('about_me_header')}
              </header>
              <p className={classes.footerContent}>
                {t('about_me_short_info')}
              </p>
            </div>
            <div className={`${classes.footerColumn} col-md-4`}>
              <header className={classes.footerHeader}>
                {t('about_me_header')}
              </header>
              <p className={classes.footerContent}>
                {t('about_me_short_info')}
              </p>
            </div>
            <div className={`${classes.footerColumn} col-md-4`}>
              <header className={classes.footerHeader}>
                {t('about_me_header')}
              </header>
              <p className={classes.footerContent}>
                {t('about_me_short_info')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerAuthor}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className={`${classes.footerContent} text-center`}>Nhan Nguyen</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
