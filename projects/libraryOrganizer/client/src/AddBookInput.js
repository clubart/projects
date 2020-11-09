import React from 'react';

export default function AddBookInput(props) {
    return (
        <div>
            Name:<input name="name" value={props.name} onChange={props.onChange} />
        Category:<input name="category" value={props.category} onChange={props.onChange} />
        Shelf:<input name="shelf" value={props.shelf} onChange={props.onChange} />
        </div>
    );
}