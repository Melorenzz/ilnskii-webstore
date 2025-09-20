import MainLayout from "../ui/MainLayout.tsx";
import OrderForm from "../components/checkout/OrderForm.tsx";
import OrderResult from "../components/cart/OrderResult.tsx";
import {useState} from "react";
import PayOrder from "../components/checkout/PayOrder.tsx";


export default function Checkout() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        paymentMethod: 'card',
        apartment: '',
        floor: '',
        intercom: '',
        entrance: '',
        comments: ''
    });

    return (
        <MainLayout>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10 '>
                <OrderForm formData={formData} setFormData={setFormData} />
                {/*<PayOrder formData={formData} setFormData={setFormData} />*/}
                <OrderResult />
            </div>
        </MainLayout>
    );
}