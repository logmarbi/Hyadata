import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { List, Collapse, Divider, ListItem } from '@material-ui/core'
import MenuItem from './MenuItem'
import Filters from './Filters'
import cars from './newest.jpg';
import { TramRounded } from '@material-ui/icons'

const styles = ({ palette, spacing }) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: palette.background.paper
  },
  nested: {
    paddingLeft: spacing.unit * 4
  },
  menuOpen: {
    backgroundColor: palette.background.default
  }
})

function NestedList({ classes, routes, isDrawerOpen, handleDrawerState }) {
  const [isOpen, setIsOpen] = useState({})
  const [selectedRoute, setSelectedRoute] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  const handleCallback = (childData) => {
    setIsFilterOpen(childData);
    // alert(childData);
  }

  function handleClick(name) {
    setIsOpen({
      ...isOpen,
      [name]: !isOpen[name]
    })
  }

  return (

    <div className={classes.root}>
      <List component="nav" disablePadding>
        {isFilterOpen &&
          <>
            <img src={cars} style={{
              image: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
            }} />
            <div class="centered">יובל רוזנבוש</div>

            {routes.length
              ? routes.map(route => (
                <div
                  key={route.label}
                  className={classNames(isOpen[route.name] && classes.menuOpen)}
                >
                  <MenuItem
                    {...route}
                    open={isOpen[route.name]}
                    selected={selectedRoute === route.to}
                    clickHandler={handleClick}
                    selectHandler={setSelectedRoute}
                    isDrawerOpen={isDrawerOpen}
                    caption={
                      route.multiple
                        ? route.options.map(opt => opt.title).join(', ')
                        : null
                    }
                  />

                  {route.multiple && (
                    <Collapse
                      in={isOpen[route.name]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div">
                        {route.options.map(nested => (
                          <MenuItem
                            key={nested.label}
                            {...nested}
                            child
                            className={classes.nested}
                            selectHandler={setSelectedRoute}
                            selected={selectedRoute === nested.to}
                            isDrawerOpen={isDrawerOpen}
                          />
                        ))}
                      </List>
                    </Collapse>
                  )}
                  <Divider />
                </div>
              ))
              : null}
          </>}
        <Filters isDrawerOpen={isDrawerOpen} handleDrawerState={handleDrawerState} parentCallback={handleCallback} />
      </List>
    </div>
  )
}

NestedList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDrawerOpen: PropTypes.bool.isRequired
}

export default withStyles(styles)(NestedList)
