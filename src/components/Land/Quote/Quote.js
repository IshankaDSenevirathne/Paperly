import React, {useMemo} from "react";
import { Container, Typography } from "@material-ui/core";

import './Quote.css';
import quotes from '../../../paperdata/quotes.json';
import Goal from "../../../img/goal.svg";

const Quote = () => {
    const currentQuote = useMemo(() => {
        const randomQuote = Math.floor(Math.random() * quotes.length);

        return quotes[randomQuote];
    }, []);

    return (
        <div className="quote-container">
            <Container> 
                <div>
                    <img src={Goal}></img>
                </div>
                <Typography variant="h4">{currentQuote.quote}</Typography>
                <Typography variant="subtitle2">{currentQuote.by}</Typography>
            </Container>
        </div>
    )
}

export default Quote;
