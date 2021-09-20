import * as yup from 'yup';

const ProductSchema = yup.object().shape({
    id: yup.number().required(),
    title: yup.string().required(),
    brand: yup.string(),
    price: yup.number().min(0),
    quantity: yup.number().min(0)
}); 

export default ProductSchema;

