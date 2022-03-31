import React from "react";



class Card extends React.Component {


    render() {
        const profile = this.props
        return (
            <div className="github-profile" style={{ margin: '1rem' }}>
                <img src="{profile.avatar_url}" style={{ height: '1rem', width: '1rem' }} />
                <div className="info">
                    <div>{profile.name}</div>
                    <div>{profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card