const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageURL:
                'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=696&q=80',
            linkURL: 'shop/hats',
            id: 1,
        },
        {
            title: 'sneakers',
            imageURL:
                'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            linkURL: 'shop/sneakers',
            id: 2,
        },
        {
            title: 'jackets',
            imageURL:
                'https://images.unsplash.com/photo-1545885785-910f3bbf07a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            linkURL: 'shop/jackets',
            id: 3,
        },
        {
            title: 'mens',
            imageURL:
                'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            linkURL: 'shop/mens',
            size: 'large',
            id: 4,
        },
        {
            title: 'womens',
            imageURL:
                'https://images.unsplash.com/photo-1538330627166-33d1908c210d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            linkURL: 'shop/womens',
            size: 'large',
            id: 5,
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;