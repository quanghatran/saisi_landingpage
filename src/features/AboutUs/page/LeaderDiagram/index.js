import { useHistory } from 'react-router-dom';

import { InforContainer, Wrapper } from "../../../../assets/styles";
import useFetch from '../../../../api/CustomHooks/useFetch';


const LeaderDiagram = () => {
    const { data, isPending, error } = useFetch(process.env.REACT_APP_API_URL + 'Diagram');
    const history = useHistory();


	return (
		<Wrapper>
			<InforContainer>
                <button onClick={() => history.goBack()} className="fas fa-arrow-left"></button>
				<h1>SƠ ĐỒ LÃNH ĐẠO</h1>
                { isPending && <div></div> }
                { error && <div>{ error }</div>}
                { data &&
					<div>
						{data.map(i => (
							<img key={i.id} alt={i.id} src={process.env.REACT_APP_API_URL + i.Image}/>
						))}
					</div>
                }
            </InforContainer>
		</Wrapper>
	);
};

export default LeaderDiagram;
