import * as React from "react"
import Head from "next/head";
import {Box, ChakraProps, Flex, useColorMode} from "@chakra-ui/react";
import {getBrandColors} from "../../theme/colors"
import {NavHeader} from "../sections/NavHeader";
import {Footer} from "../sections/Footer";

export interface LayoutProps extends ChakraProps {
    /** The title of this page */
    title: string,
    /** An description of this page. */
    description: string,
    /** An optional setting which, if set to false (the default), means a nav header and footer will be shown. */
    fullscreen?: boolean,
}

/**
 * The main layout, which stretches the full screen, sets up shared configuration, and applies branded colors.
 */
const Layout: React.FunctionComponent<LayoutProps> =
    ({
         title,
         description,
         fullscreen = false,
         children,
         ...props
     }) => {
        const {colorMode} = useColorMode()
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <title>{title}</title>
                    <meta name="description" content={description}/>
                </Head>
                <Flex
                    backgroundColor={getBrandColors(colorMode).bg}
                    color={getBrandColors(colorMode).fg}
                    justifyContent="center"
                >
                    <Flex
                        as="div"
                        direction="column"
                        minHeight="100vh"
                        minWidth="70vw"
                        width="70vw"
                        alignItems="stretch"
                    >
                        {!fullscreen && <NavHeader />}
                        <Box
                            as="main"
                            flexGrow={1}
                            {...props}
                        >
                            {children}
                        </Box>
                        {!fullscreen && <Footer />}
                    </Flex>

                </Flex>
            </>
        )
    }

export default Layout