import './main.css'

export default function Movies () {
    return (
        <>
            <div className='main' >
                <p className='director' >QUENTIN TARANTINO</p>
                <span className='name' >Pulp Fiction</span>
                <span className='year' > 1994</span>
                <p className='synopsis' >The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.</p>
                <a href="https://www.youtube.com/watch?v=tGpTpVyI_OQ" target="_blank" ><button>Watch the trailer</button></a>
            </div>
            <div className='imgs'>
                <img className='gif' src="https://i.gifer.com/7VA.gif" alt="People of the movie dancing" />
            </div>
        </>
    )
}