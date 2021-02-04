import React from 'react';
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/prewiew-collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, items, title, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} items={items} title={title} />
                ))}
            </div>
        )
    }
}
export default ShopPage;