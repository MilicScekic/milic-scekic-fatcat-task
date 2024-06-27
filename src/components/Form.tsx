import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProps } from '@homework-task/typescript/interfaces';

const Form = <T extends Record<string, any>>({
    useMutation,
    validationSchema,
    renderForm,
    heading,
}: FormProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutation();

    const onSubmit: SubmitHandler<T> = async (data) => {
        await mutation.mutateAsync(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2">
            <h2 className="text-lg font-semibold my-4">{heading}</h2>
            {renderForm({ register, errors })}
            <button
                className="bg-primary px-6 py-2 rounded-lg text-white mb-2"
                type="submit"
                disabled={mutation.isLoading}
            >
                {mutation.isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {mutation.isError && <div>Submission error</div>}
            {mutation.isSuccess && (
                <div className="text-mainGreen font-bold">
                    Form submitted successfully
                </div>
            )}
        </form>
    );
};

export default Form;
