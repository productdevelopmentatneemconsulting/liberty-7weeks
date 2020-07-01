export default theme => ({
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.common.black,
  },
  headerContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      margin: 0,
      marginRight: theme.spacing(3.75),
      marginBottom: theme.spacing(-0.25),
    },
  },
  pad20: {
    padding: theme.spacing(2.5),
  },
  follow: {
    position: 'absolute',
    right: 120,
    [theme.breakpoints.up('md')]: {
      right: 80,
    },
    '& svg': {
      fill: theme.palette.common.white,
    },
    '&:focus-within button': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  followButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover > div, &:focus > div': {
      height: 'auto',
    },
  },
  followPopup: {
    position: 'fixed',
    top: 60,
    right: 0,
    backgroundColor: theme.palette.common.white,
    width: '100vw',
    boxShadow: '0 0 10px 4px rgba(0,0,0,.1)',
    height: 0,
    transition: 'height 0.3s ease-in-out',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      minWidth: 340,
      right: -20,
      width: 340,
      '&:focus-within': {
        height: 'auto',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 0,
      height: 4,
      backgroundColor: theme.palette.primary.main,
    },
    '& .c-social': {
      '& ul': {
        justifyContent: 'center',
      },
      '& svg': {
        fill: theme.palette.common.black,
      },
    },
  },
  newsletter: {
    marginTop: theme.spacing(2.5),
  },
  newsletterSubscribeButton: {
    fontSize: '.875rem',
    fontWeight: 700,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'inline-block',
    textDecoration: 'none',
    position: 'relative',
    transform: 'perspective(1px) translateZ(0)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover': {
      color: theme.palette.common.white,
    },
    '&:hover:before': {
      transform: 'scaleX(1)',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      paddingTop: theme.spacing(1.75),
      paddingBottom: theme.spacing(1.75),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
  },
  siteSearch: {
    position: 'absolute',
    right: 60,
    [theme.breakpoints.up('md')]: {
      right: 20,
    },
    '& svg': {
      fill: theme.palette.common.white,
    },
  },
  searchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  siteSearchOverlay: {
    position: 'fixed',
    top: 60,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.common.white,
    overflow: 'auto',
    zIndex: 3,
  },
  siteSearchForm: {
    maxWidth: '780px',
    display: 'flex',
    marginTop: theme.spacing(6.25),
    marginBottom: theme.spacing(6.25),
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  siteSearchInput: {
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    border: `1px solid ${theme.palette.grey[200]}`,
    fontSize: '1.125rem',
    fontWeight: 600,
    width: '100%',
    flex: 1,
  },
  siteSearchFormButton: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.grey[200]}`,
    cursor: 'pointer',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -1,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  label: {
    display: 'none',
  },
  srOnly: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'polygon(0 0,0 0,0 0)',
    height: '.0625rem',
    margin: '-.0625rem',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '.0625rem',
    whiteSpace: 'nowrap',
  },
});
