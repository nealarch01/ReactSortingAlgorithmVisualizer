import React from 'react';
import './RectangleStyles.css';

interface RectProps {
    x_coord: number;
    height: number;
    id_value: number;
}

const Rectangle: React.FC<RectProps> = (props) => {
    return (
        <React.Fragment>
            {/* <rect x="0" y="0" width="23" height="44" className="VRect"></rect> */}
            <rect x={props.x_coord.toString()} y="0" height={props.height.toString()} width="23" className="VRect" id={`VRect-${props.id_value}`} />
        </React.Fragment>
    );
}

export default Rectangle;