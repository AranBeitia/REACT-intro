import * as yup from 'yup';

const UserRegisterSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    nickName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
}); 

export default UserRegisterSchema;

