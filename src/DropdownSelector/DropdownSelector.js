import React, { Component } from 'react';
import { Select } from 'antd'
import cards from '../assets/cards.json';
import './DropdownSelector.module.css';
const { Option } = Select;

class Selector extends Component {
    render() {
        let names = this.props.collection.map(item => {
            const card = cards.find(card => card['name'] === item.Name);
            const image = card && (<img src={`https://art.hearthstonejson.com/v1/orig/${card.id}.png`} alt={item.Name}/>);

            return <Option key={item.Name} disabled={Object.keys(this.props.selectedCards).indexOf(item.Name) >= 0} value={item.Name}>
                {image}
                {item.Name}
            </Option>;
        });

        return (
            <div>
                <span>What is the probability to see and buy these minions in the tavern? &nbsp; </span>
                <Select 
                    showSearch
                    style={{width: '250px'}}
                    placeholder='Add a minion'
                    value={null}
                    autoFocus={true}
                    onChange={this.props.changed}>
                    {names}
                </Select>
            </div>
        );
    }
}

export default Selector;