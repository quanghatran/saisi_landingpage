import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  contain: {
    zIndex: 2,
    float: 'right',
    position: 'sticky',
    top: '35vh',
    marginRight: '10px',
    height: '200px',
    width: '130px',
    [theme.breakpoints.down('xs')]: {
      height: '150px',
      width: '90px',
    },
  },
  img: {
    boxShadow: '0 0 5px #333',

    borderRadius: '5px',
    height: '100%',
    width: '100%',
  },
  clearBtn: {
    borderTopLeftRadius: '5px',
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#fff',
    backgroundColor: 'red',
    '& svg': {
      fontSize: '18px',
      marginTop: '2px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
      },
    },
  },
}));

export default useStyle;
