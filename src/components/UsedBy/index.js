import React from 'react';
import { SimpleGrid, Flex } from '@chakra-ui/react';

import DoubleLoopLogo from '../../../static/img/used-by/doubleloop.svg';
import LinkedInLogo from '../../../static/img/used-by/linkedin.svg';
import BitDevLogo from '../../../static/img/used-by/bitdev.svg';
import BasisLogo from '../../../static/img/used-by/basis.svg';
import TypeformLogo from '../../../static/img/used-by/typeform.svg';

const CompanyLogo = ({ Logo, ...props }) => (
  <Flex alignItems="center" justifyContent="center" height="30px" {...props}>
    <Logo height="100%" />
  </Flex>
);

export default function UsedBy() {
  return (
    <SimpleGrid
      textAlign="center"
      filter="contrast(0) brightness(1.4) saturate(0)"
      columns={[2, 3, 5]}
      spacing={7}
    >
      <CompanyLogo title="linkedin.com" Logo={LinkedInLogo} />
      <CompanyLogo title="doubleloop.app" Logo={DoubleLoopLogo} />
      <CompanyLogo title="typeform.com" Logo={TypeformLogo} />
      <CompanyLogo title="bit.dev" Logo={BitDevLogo} />
      <CompanyLogo title="getbasis.com" Logo={BasisLogo} />
    </SimpleGrid>
  );
}
