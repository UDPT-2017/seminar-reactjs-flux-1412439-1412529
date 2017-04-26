import React from 'react';
class Root extends React.Component {
    render() {
        let itemHtml = <li>Hello React</li>; // we will map a list here later
        return <div>
            <ul>
                {itemHtml}
            </ul>
        </div>;
    }
};

export default Root;