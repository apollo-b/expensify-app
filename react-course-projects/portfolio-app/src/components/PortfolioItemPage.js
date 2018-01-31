import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h1>Portfolio</h1>
        {`Portfolio item: ${props.match.params.id}`}
    </div>
);

export default PortfolioItemPage;