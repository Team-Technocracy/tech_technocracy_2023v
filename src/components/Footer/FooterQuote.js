import React from 'react';
import { Quotes } from '../utils/Quotes';

// import quotation from '../../images/quote-left.svg';

import styles from './FooterQuote.module.css';

const FooterQuote = () => {
	let curQuote = Quotes[Math.floor(Math.random() * Quotes.length)];

	return (
		<div className={styles.quoteContainer}>
			{/* Quotation Icon */}
			{/* <img
        className={styles.quotationMark}
        src={quotation}
        alt="Quotation Mark"
      /> */}

			<p className={styles.quote}>&#8220;{curQuote.quote}&#8221;</p>
			<p className={styles.author}>- {curQuote.author}</p>
		</div>
	);
};

export default FooterQuote;
