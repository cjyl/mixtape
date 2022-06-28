import React from 'react'
import ListItem from './ListItem'

const List = (props) => {

  if (!props.songs) {
    return <h1>No songs</h1>
  }

  return (
    <ul>
     {
      props.songs.map(song => {
        return (
          <ListItem key={Math.random()} song={song}/>
        )
      })
     }

    </ul>
  )
}

export default List
