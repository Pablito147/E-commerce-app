import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import PreviewCollection from '../prewiew-collection/preview-collection.component';


import './collection-overview.styles.scss';

const CollectionOverView = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, items, title, ...otherCollectionProps }) => (
            <PreviewCollection key={id} items={items} title={title} {...otherCollectionProps} />
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollections
    }
);

export default connect(mapStateToProps)(CollectionOverView)