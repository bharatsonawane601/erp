import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'DB Square'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.dbsquare.com">www.dbsquare.com</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/dbsquare/db-square-erp-crm">
              https://github.com/dbsquare/db-square-erp-crm
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.dbsquare.com/contact-us/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
