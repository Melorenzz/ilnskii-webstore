import type {Dispatch, SetStateAction} from "react";

interface IFormData {
    name: string;
    phone: string;
    paymentMethod: string;
    apartment: string;
    floor: string;
    intercom: string;
    entrance: string;
    comments:string;
}
export interface OrderFormProps {
    formData: IFormData;
    setFormData: Dispatch<SetStateAction<IFormData>>;
}