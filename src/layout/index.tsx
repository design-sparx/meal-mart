import React, {ReactNode} from 'react';
import LandingHeader from "@/components/LandingHeader";
import {Affix, Box, Button, Transition} from "@mantine/core";
import LandingFooter from "@/components/LandingFooter";
import LandingLinksNav from "@/data/LandingNavLinks.json";
import LandingLinksFooter from "@/data/LandingFooterLinks.json";
import { useWindowScroll } from '@mantine/hooks';
import {MdKeyboardArrowUp} from "react-icons/md";


/**
 * prop containNav will big ensure nav and hero section have same background
 */
interface IProps {
  children: ReactNode
  containNav?: boolean
}

function Wrapper({children, containNav}: IProps) {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <LandingHeader mainLinks={LandingLinksNav.mainLinks} userLinks={LandingLinksNav.userLinks} containNav={containNav}/>
      <Box sx={{marginTop: `${containNav ? '-90px' : 0}`}}>
        {children}
      </Box>
      <LandingFooter data={LandingLinksFooter.data}/>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<MdKeyboardArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default Wrapper;
