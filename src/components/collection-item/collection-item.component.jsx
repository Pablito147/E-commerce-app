import react from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-btn/custom-btn.component'
import { addItem } from '../../redux/cart/cart.actions';

import '../collection-item/collection-item.styles.scss';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
        </div>
    )
}
// prvý addItem je v podstate prop a za ním funkcia ktorá dostane to čo pasnem ako payload a returne dispatch
// s action creatorom ktorý zavolá additem z cart.action a ďalej posunie do reducera 
const mapDispathToProps = dispath => ({
    addItem: item => dispath(addItem(item))
})

export default connect(null, mapDispathToProps)(CollectionItem);