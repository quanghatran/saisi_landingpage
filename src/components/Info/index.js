import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import useFetch from '../../api/CustomHooks/useFetch';
import { Wrapper, InforContainer } from "../../assets/styles";

const Info = (props) => {
    const { path, title, content } = props;
    let { id } = useParams();
    id = id ? '/' + id : '';
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + path + id);
    const history = useHistory();

    setTimeout(function(){
        window.scrollTo(0,0);
    }, 100)

    return (  
        <Wrapper>
            <InforContainer>
                <button onClick={() => history.goBack()} className="fas fa-arrow-left"></button>
                { isPending && <div></div> }
                { error && <div>{ error }</div>}
                { id ? 
                data && 
                        <Fragment>
                            <h1>{data[title]}</h1>
                            <div dangerouslySetInnerHTML={{__html: data[content]}}></div>
                        </Fragment>
                        :
                data &&
                        <Fragment>
                            <h1>{data[0][title]}</h1>
                            <div dangerouslySetInnerHTML={{__html: data[0][content]}}></div>
                        </Fragment>
                }
            </InforContainer>
        </Wrapper>
    );
}
 
export default Info;