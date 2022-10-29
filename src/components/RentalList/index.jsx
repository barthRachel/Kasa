import React from 'react';
import rentalInfos from '../../logements.json';
import Card from '../Card';
import styled from 'styled-components';

const RentalListDiv = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap: wrap;
    padding : 0px 150px 0px 150px;
`


function RentalList(){
    return (
        <RentalListDiv>
            {rentalInfos.map((infos, index) => (
                <Card
                    key={`${infos.name}-${index}`}
                    cover={infos.cover}
                    title={infos.title}
                />
            ))}
        </RentalListDiv>
    )
}

export default RentalList