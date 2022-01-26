import React from 'react'
import ButtonComp from '../../components/button/button.component';
import DropDownList from '../../components/drop-down-list/drop-down-list.component'
import Switcher from '../../components/switcher/switcher.component';
import Convert from '../convert/convert.component';

// const list1 = ['aa', 'bbbbbbbb', 'c'];
// const buttonName = "convert";

const Home = () => {
    return (
        <div>
            home
            {/* <DropDownList list={list1}/> */}
            {/* <ButtonComp buttonName={buttonName}/> */}
            {/* <Switcher /> */}
            <Convert />
        </div>
    )
}

export default Home
