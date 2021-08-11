import React, {useState} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    const [ scrollX, setScrollX ] = useState(0)

    const handleLeftArrow = () => {

    }

    const handleRightArrow = () => {
        
    }

    return (
        <div className="movieRow">
             <h2>{title}</h2>
            <div className="movieRow--left">
                <NavigateBeforeIcon style={{fontSize: '50px'}} onClick={handleLeftArrow}/>
            </div>
            <div className="movieRow--right">
                <NavigateNextIcon  style={{fontSize: '50px'}} onClick={handleRightArrow}/>
            </div>

                <div className="movieRow--listarea"> 
                    <div className="movieRow--list">
                        {items.results.length > 0 && items.results.map((item, key) => (
                            <div  key={key} className="movieRow--item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
}