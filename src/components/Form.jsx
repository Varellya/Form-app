import React from 'react';
import { fetchUsers, saveUser } from '../utils/api';

export const Form = ({
    setUsers,
    userToEdit,
    setUserToEdit
}) => {

    const handleSubmit = () => {
        let inputValueArr = [];
        let inputs = document.getElementsByTagName('input');
        let emailValue = document.getElementById('email').value;

        for (let i = 0; i < inputs.length; i++) {
            inputValueArr.push(inputs[i].value);
        };

        let validateEmail = (email) => {
            let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return emailPattern.test(String(email).toLowerCase());
        };

        if (!validateEmail(emailValue)) {
            return false;
        };

        if (inputValueArr.includes('')) {
            return false;
        } else {
            saveUser(userToEdit)
            .then(fetchUsers)
            .then(setUsers)
            .then(() => {
                setUserToEdit(null);
            });
        };
    };

    const handleUserNameChange = (firstName) => {
        setUserToEdit({...userToEdit, firstName});
    };

    const handleUserSurnameChange = (lastName) => {
        setUserToEdit({...userToEdit, lastName});
    };

    const handleUserEmailChange = (email) => {
        setUserToEdit({...userToEdit, email});
    };

    const handleUserAgeChange = (age) => {
        setUserToEdit({...userToEdit, age});
    };

    const handleUserGenderChange = (gender) => {
        setUserToEdit({...userToEdit, gender});
    };

    const handleUserBloodChange = (bloodGroup) => {
        setUserToEdit({...userToEdit, bloodGroup});
    };

    const handleUserPasswordChange = (password) => {
        setUserToEdit({...userToEdit, password});
    };

    const handleUserBirthChange = (birthDate) => {
        setUserToEdit({...userToEdit, birthDate});
    };

    const handleUserPhoneChange = (phone) => {
        setUserToEdit({...userToEdit, phone});
    };

    const handleUserHairChange = (color) => {
        const updatedUser = {...userToEdit};

        updatedUser.hair = { ...updatedUser.hair, color };
        setUserToEdit(updatedUser);
    };

    const currentDate = new Date();
    const birthDate = new Date(userToEdit.birthDate);

    return (
        <form key={userToEdit.id} className='modal_form' action="" method="get">
            <label for="firstName">First Name*</label>
            <input id="firstName" type="text" value={userToEdit.firstName} onChange={(e) => handleUserNameChange(e.target.value)} required/>

            <label for="lastName">Last Name*</label>
            <input id="lastName" type="text" value={userToEdit.lastName} onChange={(e) => handleUserSurnameChange(e.target.value)} required/>

            <label for="email">Email*</label>
            <input id="email" type="email" value={userToEdit.email} onChange={(e) => handleUserEmailChange(e.target.value)} required/>

            <label for="gender">Gender*</label>
            <div id="gender" value={userToEdit.gender} onChange={(e) => handleUserGenderChange(e.target.value)} required>
                <input type="radio" name="gender" id="genderChoice1" value="male"/>
                <label for="genderChoice1">Male</label>

                <input type="radio" name="gender" id="genderChoice2" value="female"/>
                <label for="genderChoice2">Female</label>

                <input type="radio" name="gender" id="genderChoice3" value="unset"/>
                <label for="genderChoice3">Prefer not to respond</label>
            </div>

            <label for="bloodGroup">Blood group*</label>
            <select id="bloodGroup" value={userToEdit.bloodGroup} onChange={(e) => handleUserBloodChange(e.target.value)} required>
                <option value="A+">A RhD positive (A+)</option>
                <option value="A-">A RhD negative (A-)</option>
                <option value="B+">B RhD positive (B+)</option>
                <option value="B-">B RhD negative (B-)</option>
                <option value="O+">O RhD positive (O+)</option>
                <option value="O-">O RhD negative (O-)</option>
                <option value="AB+">AB RhD positive (AB+)</option>
                <option value="AB-">AB RhD negative (AB-)</option>
            </select>

            <label for="password">Your password*</label>
            <input id="password" type="password" value={userToEdit.password} onChange={(e) => handleUserPasswordChange(e.target.value)} required/>

            <div  className='info_age'>
                <div className='input_birth'>
                    <label for="birthDate">Your date of Birth*</label>
                    <input id="birthDate" type="date" value={userToEdit.birthDate} onChange={(e) => handleUserBirthChange(e.target.value)} required/>
                </div>

                <div className='age_update'>
                    <label for="updateAge">Update user age?</label>
                    <input id="updateAge" type="checkbox" name="age" value={Math.floor((currentDate - birthDate) / 31536000000)} onChange={(e) => handleUserAgeChange(e.target.value)} />
                </div>
            </div>

            <label for="phone">Phone*</label>
            <input id="phone" type="tel" value={userToEdit.phone} onChange={(e) => handleUserPhoneChange(e.target.value)} required/>

            <label for="hairColorsInput">Hair colors*</label>
            <input list='hairColorsList' id="hairColorsInput" type="text" value={userToEdit.hair.color} onChange={(e) => handleUserHairChange(e.target.value)} required/>
            <datalist id="hairColorsList">
                <option value="Auburn" />
                <option value="Black" />
                <option value="Blond" />
                <option value="Brown" />
                <option value="Chestnut" />
            </datalist>

            <div>
                <button onClick={handleSubmit} className='btn_modal btn_save' type="submit">Submit</button>
                <button onClick={() => setUserToEdit(null)} className='btn_modal' type="submit">Cancel</button>
            </div>
        </form>
    );
};
