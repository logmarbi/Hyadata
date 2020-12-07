// const styles = ({ mixins, spacing, palette }) => ({
//     root: {
//         flexGrow: 4,
//         align: "center",
//         padding: 7,
//     },
//     card: {
//         ...mixins.gutters(),
//         paddingTop: spacing.unit * 2,
//         paddingBottom: spacing.unit * 2,
//         color: palette.text.primary,
//         padding: spacing.unit * 2

//     },
//     title: {
//         flexGrow: 1,
//         align: "center",
//         fontSize: 30,
//         justify: "center",
//         justifyContent: "center"
//     },
//     control: {
//         padding: spacing.unit * 2
//     },
// })

// export default styles

const styles = ({ mixins, spacing, palette }) => ({
    root: {
        flexGrow: 4,
        align: "center",
        padding: 15,
        display: 'flex',

    },
    paper: {
        padding: spacing.unit * 2,
        textAlign: 'center',
        paddingBottom: 100,
        margin: 200,
        display: 'flex',


    },
    title: {
        flexGrow: 1,
        fontSize: 30,
        marginBottom: -10
        // align: "center",
        // justify: "center",
        // justifyContent: "center",
        // display: 'flex',

    },
    pos: {
        flexGrow: 1,
        fontSize: 18,
        // align: "center",
        // justify: "center",
        // justifyContent: "center",
        // display: 'flex',

    },
})

export default styles

