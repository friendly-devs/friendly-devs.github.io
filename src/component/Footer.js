import React from 'react';

class Footer extends React.Component {
    state = {}
    render() {
        return (
            <div style={{ backgroundColor: "#333" }}>
                <div className="row">
                    <div className="col-md-6">
                        <p>Day la web si<br/>
                            hot dong con tot
                        </p>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Lien he voi chung toi</li>
                            <li>Lien he voi chung toi</li>
                            <li>Lien he voi chung toi</li>
                            <li>Lien he voi chung toi</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;