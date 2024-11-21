/* eslint-disable react/prop-types */

const FromData = ({props}) => {
    const { name, phone, email, password } = props

    return (
        <div>
            <h1>My Name : {name}</h1>
            <p>My Phone Number : {phone}</p>
            <p>My Email : {email}</p>
            <p>My Password : {password}</p>
        </div>
    );
};

export default FromData;