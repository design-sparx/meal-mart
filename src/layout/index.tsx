import React, {ReactNode} from 'react';
import LandingHeader from "@/components/LandingHeader";
import {Box} from "@mantine/core";
import LandingFooter from "@/components/LandingFooter";
import LandingLinksNav from "@/data/LandingNavLinks.json";
import LandingLinksFooter from "@/data/LandingFooterLinks.json";


/**
 * prop containNav will big ensure nav and hero section have same background
 */
interface IProps {
  children: ReactNode
  containNav: boolean
}

function Wrapper({children, containNav}: IProps) {
  return (
    <>
      <LandingHeader mainLinks={LandingLinksNav.mainLinks} userLinks={LandingLinksNav.userLinks}/>
      <Box sx={{marginTop: `${containNav ? '-90px' : 0}`}}>
        {children}
      </Box>
      <LandingFooter data={LandingLinksFooter.data}/>
    </>
  );
}

export default Wrapper;
