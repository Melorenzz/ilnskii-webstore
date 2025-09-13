import JobCards from "../components/vacancies/JobCards.tsx";
import MainLayout from "../ui/MainLayout.tsx";
import ApplicationForm from "../components/vacancies/ApplicationForm.tsx";

const Vacansies = () => {
    return (
        <MainLayout>
            <h1 className='text-3xl uppercase font-bold'>вакансии</h1>
            <JobCards />
            <ApplicationForm />
        </MainLayout>
    );
};

export default Vacansies;