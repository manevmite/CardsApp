import React from "react"
import Card from "./Card"



class CardList extends React.Component {
    render() {
        return (
            <div>
                {this.props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
                {/* <Card {...testData[0]} />
                <Card {...testData[1]} /> */}
            </div>

        );
    }
}

export default CardList