import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation, { NavigationItem } from "./Navigation";
import { mdiMagnify } from '@mdi/js';
import Icon from "@mdi/react";
import { mdiHelpCircleOutline } from '@mdi/js';


const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    gap: 20px;
    background-color: grey;
`

const Title = styled.span`
    font-size: 24px;
    color: white;
`

const NavBar: React.FunctionComponent = (): ReactElement => {
    return (
        <NavBarContainer>
            <Title>Poppyland Blog</Title>
            <Navigation />
            <NavigationItem><Icon path={mdiMagnify} size={1} /></NavigationItem>
            <NavigationItem><Icon path={mdiHelpCircleOutline} size={1} /></NavigationItem>
        </NavBarContainer>
    )
}

export default NavBar