import React, {useMemo} from "react";
import { Container, Typography } from "@material-ui/core";

import './Quote.css';
import quotes from './quote.json';

const Quote = () => {
    const currentQuote = useMemo(() => {
        const randomQuote = Math.floor(Math.random() * quotes.length);

        return quotes[randomQuote];
    }, []);

    return (
        <div className="quote-container">
            <Container>
                <Typography variant="h3">{currentQuote.text}</Typography>
                <Typography variant="p">{currentQuote.author}</Typography>
            </Container>
        </div>
    )
}

export default Quote;
