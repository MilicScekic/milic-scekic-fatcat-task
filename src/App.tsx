import { List } from '@homework-task/components/List';
import useUsers, { User } from '@homework-task/hooks/useUsers';
import { ListItem } from '@homework-task/components/ListItem';

import './styles.css';
import Form from './components/Form';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import usePost from './hooks/usePost';

function App(): JSX.Element {
    const validationSchema = z.object({
        title: z
            .string()
            .min(1, 'Title is required')
            .max(20, 'Maximum number of characters is 20'),
        body: z
            .string()
            .min(1, 'Body is required')
            .max(100, 'Maximum number of characters is 100'),
    });
    type FormData = z.infer<typeof validationSchema>;

    const renderForm = ({
        register,
        errors,
    }: {
        register: UseFormRegister<FormData>;
        errors: FieldErrors<FormData>;
    }) => {
        return (
            <div className="flex flex-col mb-4">
                <label htmlFor="title">Title</label>
                <input
                    className="border border-gray40 rounded-lg p-1 my-2"
                    id="title"
                    type="text"
                    {...register('title')}
                />
                {errors.title && (
                    <span className="text-[#ff0000]">
                        {errors.title.message}
                    </span>
                )}

                <label htmlFor="body" className="mt-2">
                    Body
                </label>
                <textarea
                    className="border border-gray40 rounded-lg p-1 my-2"
                    id="body"
                    rows={4}
                    {...register('body')}
                />
                {errors.body && (
                    <span className="text-[#ff0000]">
                        {errors.body.message}
                    </span>
                )}
            </div>
        );
    };

    return (
        <main className="m-2">
            <List
                useData={useUsers}
                renderItem={(user: User) => <ListItem user={user} />}
                heading="Users List"
            />
            <Form
                useMutation={usePost}
                validationSchema={validationSchema}
                renderForm={renderForm}
                heading="Posts Form"
            />
        </main>
    );
}

export default App;
