import React from 'react';
import { HashLink as RouterLink } from 'react-router-hash-link';

import { Box, Container, Grid, Divider, Link, Button, Popper, Stack } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { blueGrey, common } from '@mui/material/colors';

import ImgCliniOps from '../../../img/CliniOps.svg';

import RouterList from '../../router';

const template = () => {
  const [anchorAbout, setAnchorAbout] = React.useState(null);
  const handleOpenAbout = (event) => {
    if (anchorAbout !== event.currentTarget) {
      handleCloseSubMenu();
      setAnchorAbout(event.currentTarget);
      document.querySelector('#co-hdr-menu-about').classList.add('hover');
    }
  }
  const handleCloseAbout = () => {
    document.querySelector('#co-hdr-menu-about').classList.remove('hover');
    setAnchorAbout(null);
  }
  
  const [anchorMedia, setAnchorMedia] = React.useState(null);
  const handleOpenMedia = (event) => {
    if (anchorMedia !== event.currentTarget) {
      handleCloseSubMenu();
      setAnchorMedia(event.currentTarget);
      document.querySelector('#co-hdr-menu-media').classList.add('hover');
    }
  }
  const handleCloseMedia = () => {
    document.querySelector('#co-hdr-menu-media').classList.remove('hover');
    setAnchorMedia(null);
  }

  const handleCloseSubMenu = () => {
    handleCloseAbout();
    handleCloseMedia();
  }

  return (
    <>
      <Box sx={{ position: 'fixed', width: '100%', top: 0, left: 0, backgroundColor: common.white, zIndex: 10 }}>
        <Container>
          <Grid container spacing={0} alignItems='center' justifyContent='stretch' direction="row">
            <Grid item sx={{ ml: -1 }}>
              <Link to={RouterList.home._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>
                <Box
                  style={{
                    width: '170px',
                    height: '46px',
                    backgroundImage: `url(${ImgCliniOps})`,
                    backgroundSize: 'contain'
                  }}
                />
              </Link>
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" sx={{ height: '36px', margin: '0 8px 0 24px' }} flexItem />
            </Grid>
            <Grid item>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.product._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Products</Link>
            </Grid>
            <Grid item>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.service._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Services</Link>
            </Grid>
            <Grid item sx={{ position: 'relative' }}>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" href="#" onClick={handleOpenAbout} onMouseOver={handleOpenAbout} id="co-hdr-menu-about">
                About
                <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
              <Popper
                placement="bottom-start"
                anchorEl={anchorAbout}
                open={Boolean(anchorAbout)}
                onClose={handleCloseAbout}
                onMouseLeave={handleCloseAbout}
              >
                <Stack sx={{ backgroundColor: common.white, boxShadow: `0 0 16px 0 ${blueGrey[800]}`, borderRadius: '0 0 4px 4px' }}>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.mission} component={RouterLink} onClick={handleCloseAbout}>Mission</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.leadershipteam} component={RouterLink} onClick={handleCloseAbout}>Leadership Team</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.about.career} component={RouterLink} onClick={handleCloseAbout}>Careers</Link>
                </Stack>
              </Popper>
            </Grid>
            <Grid item>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" href="#" onClick={handleOpenMedia} onMouseOver={handleOpenMedia} id="co-hdr-menu-media">
                Media
                <KeyboardArrowDownOutlinedIcon fontSize="small" sx={{ ml: .5, mr: -1 }} />
              </Link>
              <Popper
                placement="bottom-start"
                anchorEl={anchorMedia}
                open={Boolean(anchorMedia)}
                onClose={handleCloseMedia}
                onMouseLeave={handleCloseMedia}
              >
                <Stack sx={{ backgroundColor: common.white, boxShadow: `0 0 16px 0 ${blueGrey[800]}`, borderRadius: '0 0 4px 4px' }}>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.media.newsroom} component={RouterLink} onClick={handleCloseMedia}>Newsroom</Link>
                  <Link color={blueGrey[800]} underline="none" className="co-hdr-menu__child" to={RouterList.media.blog} component={RouterLink} onClick={handleCloseMedia}>Blogs</Link>
                </Stack>
              </Popper>
            </Grid>
            <Grid item>
              <Link color={blueGrey[800]} className="co-hdr-menu__root" underline="none" variant="h6" to={RouterList.contact._0} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Contact</Link>
            </Grid>
            <Grid item xs={true} />
            <Grid item>
              <Button variant="outlined" to={RouterList.contact.demo} component={RouterLink} onClick={handleCloseSubMenu} onMouseOver={handleCloseSubMenu}>Request Demo</Button>
            </Grid>
          </Grid>
        </Container>
        <Divider />
      </Box>
    </>
  );
}

export default template;