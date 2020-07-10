import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
    CollectionPageContainer,
    TitleText,
    ItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleText>{title.toUpperCase()}</TitleText>
            <ItemsContainer>
                {items.map(item => (
                    <CollectionItem className='collection-item' key={items.id} item={item} />
                ))}
            </ItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
