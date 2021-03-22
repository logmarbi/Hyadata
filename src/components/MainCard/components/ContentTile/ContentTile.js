/* eslint-disable */
import React from 'react';
import { Card, CardMedia, CardActionArea, CardHeader, CardActions, IconButton, withStyles, Collapse, Typography, Chip, Divider } from '@material-ui/core';
import { normalizeBoolean } from '../../utils/normalize';
import { Star, StarBorder } from '@material-ui/icons';
import { withSnackbar } from 'notistack';

const styles = (theme) => {
	var color = ""
	var currWindow = window.location.pathname

	switch (true) {
		case currWindow.includes("/Logistics"):
			color = "#dc9c6d"
			break;
		case  currWindow.includes("/Mashabim"):
			color = "#fa7b4b"
			break;
		case  currWindow.includes("/Mashan"):
			color = "#91b17a"
			break;
		case  currWindow.includes("/Chok_vMispat"):
			color = "#cf8b3d"
			break;
		default:
			color = "#305165"
			break;
	}

	const __defines__ = {
		mediaHeight: 200,
		headerTextHeight: 20,
		grayBackground: '#F3F5F7',
		headerColor: color,
		screenRatio : (16 / 9)
	};
	
	const componentWidth = __defines__.mediaHeight * __defines__.screenRatio * 1.2;
	const headerHeight = __defines__.headerTextHeight + 32;
	return {
		root: {
			margin: 20,
			width: componentWidth,
			//height: __defines__.mediaHeight + headerHeight * 2,
			backgroundColor: __defines__.grayBackground,
			borderRadius: 15
		},
		header: {
			height: __defines__.headerTextHeight * 2.5 ,
			backgroundColor: __defines__.headerColor,
			direction: 'rtl'
		},
		headerText: {
			color: "white",
			width: componentWidth - 5000,
			height: "20%",
			fontSize: "1.5em",
			'text-overflow': 'ellipsis',
			overflow: 'hidden',
			'white-space': 'nowrap',
			fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
			textAlign: "justify"
		},
		media: {
			width: componentWidth,
			height: __defines__.mediaHeight
		},
		favoriteButton: {
			height: __defines__.headerTextHeight + 20,
			width: __defines__.headerTextHeight + 20
		},
		favoriteIcon: {
			height: __defines__.headerTextHeight + 12,
			width: __defines__.headerTextHeight + 12,
			marginRight: 20
		},
		descriptionContainer: {
			width: componentWidth,
			height: __defines__.mediaHeight,
			borderRadius: 0,
			backgroundColor: __defines__.grayBackground
		},
		descriptionText: {
			'margin': '8px 16px 16px 16px',
			fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
			height: __defines__.mediaHeight - 32,
			width: componentWidth - 32,
			direction:'rtl',
			overflowWrap: 'anywhere',
			whiteSpace: 'pre-line',
			lineHeight: 1.25,
			fontSize: "0.95em",
			textAlign: "justify",
			lineHeight: 1.6,
			overflowY: "hidden",
			overflowX: "hidden",
				},
		footer: {
			direction: 'rtl',
			backgroundColor: __defines__.grayBackground,
			padding: '12px 16px 12px 16px'
		},
		chip: {
			marginLeft: '4px',
		}
	};
};

class ContentTile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFavorite	: normalizeBoolean(this.props.isFavorite),
			hovered		: false,
			color: ""
		};

		
	}

	toggleFavorite() {
		this.setState({isFavorite: !this.state.isFavorite});
		
		if (!this.state.isFavorite) { 
			this.props.enqueueSnackbar('נשמר למועדפים!', {
				autoHideDuration: 3000,
				variant: 'success',
				anchorOrigin: { horizontal: 'right', vertical: 'top' }
			});
		}
		else {
			this.props.enqueueSnackbar('נמחק מהמועדפים', {
				autoHideDuration: 3000,
				variant: 'info',
				anchorOrigin: { horizontal: 'right', vertical: 'top' }
			});
		}
	}

	toggleDescriptionPanel() {
		this.setState({hovered: !this.state.hovered});
	}

	render() {
		const { classes } = this.props;

		return (
			<Card className={classes.root} style={{boxShadow: "2px 2px 7px #7d7d7d"}}>
				<CardHeader
					titleTypographyProps={{className:classes.headerText}}
					className={classes.header}
					action={
						<IconButton aria-label="settings" className={classes.favoriteButton}
							onClick={() => {this.toggleFavorite()}}>
							{
								this.state.isFavorite ? (
									<Star className={classes.favoriteIcon} style={{color:'yellow'}}/>
								) : (
									<StarBorder className={classes.favoriteIcon} style={{color:'white'}}/>
								)
							}
						</IconButton>
					}
					title={this.props.title}
					/>
				<CardActionArea onMouseEnter={()=>this.toggleDescriptionPanel()} onMouseLeave={()=>this.toggleDescriptionPanel()}>
					{/* <Card align="right" elevation={0} className={classes.descriptionContainer}> */}
						<Collapse in={this.state.hovered}>
							<CardMedia className={classes.media}
								image={this.props.src}>
							</CardMedia>
						</Collapse>	
						<Typography component="pre" style={{ border: "1px solid #e6e6e6", borderRadius: "15px"}} className={classes.descriptionText}>
							{this.props.body}
						</Typography>
					{/* </Card> */}
				</CardActionArea>
				<Divider/>
				<CardActions disableSpacing="true" elevation={0} className={classes.footer}>
				{
					(this.props.tags === undefined) ? '' : this.props.tags.map(tag => {
						return (
							<Chip className={classes.chip} variant="outlined" size="small" label={tag} color="primary"/>
						)
					})
				}
				</CardActions>
			</Card>
		);
	}
} 

export default withSnackbar(withStyles(styles)(ContentTile));