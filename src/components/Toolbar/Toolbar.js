import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Input,
  Badge
} from '@material-ui/core'
import {
  MenuRounded,
  MoreRounded,
  InvertColorsRounded,
  AccountCircleRounded,
  ExitToAppRounded
} from '@material-ui/icons'

import styles from './Toolbar.styles'

const AppToolbar = ({
  classes,
  isMenuOpen,
  open,
  isTop,
  handleDrawerState,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
  handleLogout,
  changeTheme,
  children
}) => (
    <AppBar
      position="absolute"
      // className={classNames(classes.appBar, open && classes.appBarShift)}
      className={classNames(classes.appBar, open)}

    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerState}
        // className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuRounded />
        </IconButton>
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          <font size="+2">נתיבים ירוקים </font>
           | פתור את אתגרי התחבורה
      </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>

          <IconButton
            aria-owns={isMenuOpen ? 'material-appbar' : null}
            aria-haspopup="true"
            onClick={changeTheme}
            color="inherit"
          >
            <InvertColorsRounded />
          </IconButton>
          <IconButton
            aria-owns={isMenuOpen ? 'material-appbar' : null}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircleRounded />
          </IconButton>
          {/* <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerState}
          >
            <MenuRounded />
          </IconButton> */}
          <IconButton onClick={handleLogout} color="inherit">
            <ExitToAppRounded />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreRounded />
          </IconButton>
        </div>
      </Toolbar>
      {children}
    </AppBar>
  )

export default withStyles(styles)(AppToolbar)
