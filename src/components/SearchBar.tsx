
export const SearchBar:React.FC = ()=>{
    


    return (<><div className='search-bar'><div className='columns multi-line'>
            <div className='column'><input className='input' type='text' placeholder='Search for name or price'></input></div>
            <div className='column'><button className='button'>Search</button></div>
            </div></div></>)
}