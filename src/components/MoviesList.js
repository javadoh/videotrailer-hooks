import React from 'react';

  function listEstrenos(list, action){
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '100%', margin: 30}}>
          {list.map(tile => (
            <div style={{marginLeft: 20}} key={tile.img} cols={tile.cols}>
              <img src={tile.img} alt={tile.title} onClick={() => action(tile)} />
            </div>
          ))}
        </div>
    );
  };

export default function renderListMovies(props){
    return <div>
    <div>
        {props.children}
        </div>

        {listEstrenos(props.movies, props.action)}
    </div>
}


