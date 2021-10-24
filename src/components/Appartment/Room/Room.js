import Couch from "./Couch/Couch";
import Chair from "./Chair/Chair";
import Table from "./Table/Table";
import Wardrobe from "./Wardrobe/Wardrobe";
import '../../App/App.css';
import PropTypes from 'prop-types'

function Room() {
    return (
        <>
            <h1 className='classOne'>Моя комната</h1>
            <Couch />
            <Chair />
            <Table style={{ color: 'blue', fontSize: 12 }} />
            <Wardrobe />
        </>
    )
};

Room.propTypes = {
    Room: PropTypes.element
}

export default Room;