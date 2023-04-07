import React, {memo, useEffect} from 'react';
import {SectionList} from "@c/SectionList/style";
import Roomltem from "@c/Roomltem";
import PropTypes from "prop-types";

const App = memo(({list = [],width}) => {

    return (
        <SectionList>
            {list.slice(0, 8).map((item) => (
                <Roomltem key={item.id} item={item} width={width} />
            ))}
        </SectionList>
    )
})
App.propTypes = {
    list: PropTypes.array.isRequired,
}
export default App