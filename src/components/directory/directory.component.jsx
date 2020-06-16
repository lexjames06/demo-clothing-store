import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageURL:
                        'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=696&q=80',
                    linkURL: 'hats',
                    id: 1,
                },
                {
                    title: 'sneakers',
                    imageURL:
                        'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    linkURL: 'sneakers',
                    id: 2,
                },
                {
                    title: 'jackets',
                    imageURL:
                        'https://images.unsplash.com/photo-1545885785-910f3bbf07a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    linkURL: 'jackets',
                    id: 3,
                },
                {
                    title: 'mens',
                    imageURL:
                        'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    linkURL: 'mens',
                    size: 'large',
                    id: 4,
                },
                {
                    title: 'womens',
                    imageURL:
                        'https://images.unsplash.com/photo-1538330627166-33d1908c210d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    linkURL: 'womens',
                    size: 'large',
                    id: 5,
                },
            ],
        };
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem
                        key={id}
                        {...otherSectionProps}
                    />
                ))}
            </div>
        );
    }
}

export default Directory;
