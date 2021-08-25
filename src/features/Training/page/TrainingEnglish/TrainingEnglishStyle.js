import { makeStyles } from '@material-ui/styles';
const useStyle = makeStyles((theme) => ({
  contain: {
    width: '90%',
    maxWidth: 1100,
    margin: '100px auto',
    '& h1': {
      textAlign: 'center',
      margin: '30px auto',
      color: '#721b00',
    },
    '& h2': {
      fontSize: '2.3em',
      margin: '3rem auto',
    },
    '& p': {
      fontSize: '1.6em',
      margin: '2rem auto',
    },
    '& h3': {
      fontSize: '2em',
      margin: '3rem auto',
    },
    '& li': {
      listStyle: 'none',
    },
  },
}));
export default useStyle;
