import React from 'react'
import propTypes from 'prop-types';
const Profile = ({exemple,func,children})=> {
    return (
        <div>
      {exemple.map((el)=>(
      <div>
          <p>{el.FullName}</p>
          <p>{el.Profession}</p>
          <h1>{children}</h1>
          <button onClick={()=>func(el.FullName)}>Cliquer ici</button>
      </div>
      ))}
      </div>
    )   
}
Profile.propTypes={
    func:propTypes.func,
    exemple:propTypes.string,
};

export default Profile;

