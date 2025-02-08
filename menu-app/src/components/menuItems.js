import React from 'react';

const menuItems = ({name, meal_time, category}) => {
    return (
        <div className='menu-option'>
            <div className="row">
                {/*pic*/}
                <div>Picture</div>
                <div><b>{name}</b></div>
                <div><p>{meal_time}</p></div>
            </div>
        </div>
    )
}
export default menuItems;