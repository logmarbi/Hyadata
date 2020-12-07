const styles = ({ mixins, spacing, palette }) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    ...mixins.gutters(),
    paddingTop: spacing.unit * 2,
    paddingBottom: spacing.unit * 2,
    color: palette.text.primary
  },

  chartPaper: {
    // ...mixins.gutters(),
    paddingLeft: spacing.unit,
    paddingRight: -100,
    paddingTop: spacing.unit,
    paddingBottom: spacing.unit * 2,
    color: palette.text.primary
  }
})

export default styles
