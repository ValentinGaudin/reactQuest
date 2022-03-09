function DisplayQuote({ quote }) {
    return (
        <div className='DisplayQuote'>
            <p>Hello</p>
            <img src={quote.image} alt={quote.characterDirection} />
            <p> {quote.character}</p>
            <blockquote>{quote.quote}</blockquote>
        </div>
    );
    }
    
    export default DisplayQuote;