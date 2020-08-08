import React from 'react';
import HouseDataForm from './HouseDataForm';

export class VisualizeCost extends React.Component{
    submit = (values) => {
        console.log(values);
    }
    render(){
        return <HouseDataForm onSubmit={this.submit} />
    }
}