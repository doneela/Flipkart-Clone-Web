// import {AppBar,Toolbar,Box,Typography, styled} from '@mui/material';

// //components

// import Search from './Search';
// import CustomButtons from './CustomButtons';


// const StyledHeader =styled(AppBar)`
//     background : #2874f0;
//     height: 55px;
// `;

// const Component = styled(Box)`
//     margin-left: 12%;
//     line-height: 0;
// `;
// const Subheading = styled (Typography)`
//     font-size: 10px;
//     font-style: Italic;
// `;

// const PlusImage = styled('img')({
//     width: 10,
//     height: 10,
//     marginLeft:4
// });

// const CustomButtonWapper =styled(Box)`
//     margin: 0 5% 0 auto;
// `;

// const Header = () => {

//     const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
//     const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


//     return ( 
//         <StyledHeader>
//             <Toolbar style={{minHeight: 55}}>
//                 <Component>
//                     <img src= {logoURL} alt="logo" style ={{width: 75}}/>
//                     <Box style={{display:'flex'}}>
//                         <Subheading>Explore&nbsp;
//                             <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
//                         </Subheading>
//                         <PlusImage src={subURL} alt="sub-logo" />
//                     </Box>
//                 </Component>
//                 <Search/>
//                 <CustomButtonWapper>
//                      <CustomButtons />
//                 </CustomButtonWapper>
//             </Toolbar>
//         </StyledHeader>
//     )
// }


// export default Header;


import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;