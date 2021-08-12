import React, {useState} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
    const [ scrollX, setScrollX ] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) { 
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 250; 

        if((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x)
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
                    <div className="movieRow--list" style={{
                            marginLeft: scrollX,
                            width: items.results.length * 250
                        }}>
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