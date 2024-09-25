import React, { useState } from 'react'
var nextId = 3;
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
];
export const List = () => {
    const [artists,setArtists] = useState(initialArtists);
    const [name,setName] = useState('');
    const handleInsertClick = () => {
        const insertAt = 2;
        const nextArtist = [
            ...artists.slice(0,insertAt),
            {id:nextId++,name:name},
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtist);
        setName('');
    }
  return (
    <div>
        <h1>Inspiring Sculptors</h1>
        <input onChange={e => setName(e.target.value)} />
        <button onClick={handleInsertClick}>Insert</button>
        <ul>
            {artists.map(a => (
                <li key={a.id}>{a.name}</li>
            ))}
        </ul>
    </div>
  )
}

export const ReverseList = () => {
    const [list,setList] = useState(initialArtists);
    const handleReverse = () => {
        const newList = [...list];
        newList.reverse();
        setList(newList);
    }
    return(
        <div>
            <button onClick={handleReverse}>Reverse</button>
            <ul>
                {list.map(l => (
                    <li key={l.id}>{l.name}</li>
                ))}
            </ul>
        </div>
    )
}
// let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];
export const Bucketlist = () => {
    const [myList,setMyList] = useState(initialList);
    const [yourList,setYourList] = useState(initialList);
    function handleToggleMyList(artworkId,nextSeen){
        const myNextList = [...myList];
        const artwork = myNextList.map(a => {
            if(a.id === artworkId)
                return {...a, seen:nextSeen}
            else
                return a;
        })
        setMyList(artwork);
    }
    function handleToggleYourList(artworkId,nextSeen){
        const yourNextList = [...yourList];
        const artwork = yourNextList.map(a => {
            if(a.id === artworkId)
                return {...a,seen:nextSeen}
            else
                return a;
        })
        setYourList(artwork);
    }
    return(
        <div>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </div>
    )
}
function ItemList({artworks,onToggle}){
    return(
        <div>
            <ul>
                {artworks.map(a => (
                    <li key={a.id}>
                        <label>
                            <input 
                                type='checkbox' 
                                checked={a.seen} 
                                onChange={(e) => {
                                onToggle(a.id,e.target.value)
                            }}/>
                            {a.title}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}