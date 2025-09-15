import MainLayout from "../ui/MainLayout.tsx";
import ContactsComponent from "../components/contacts/ContactsComponent.tsx";
import Stores from "../components/contacts/Stores.tsx";

const Contacts = () => {
    return (
        <MainLayout>
            <ContactsComponent />
            <Stores />
        </MainLayout>
    );
};

export default Contacts;