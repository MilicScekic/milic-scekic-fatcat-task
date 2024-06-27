import { List } from '@homework-task/components/List';
import useUsers from '@homework-task/hooks/useUsers';
import { ListItem } from '@homework-task/components/ListItem';

import '@homework-task/styles.css';
import Form from '@homework-task/components/Form';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';
import usePost from '@homework-task/hooks/usePost';
import items from '@homework-task/mock-data/items.json';
import LayoutSection from '@homework-task/components/LayoutSection';
import { LayoutSectionData, PageData } from '@homework-task/typescript/types';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { User } from '@homework-task/typescript/interfaces';

function App() {
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

    const data: PageData = [
        {
            key: 1,
            type: 'flexLayout',
            props: { title: 'Flex layout' },
            components: [
                {
                    type: 'componentHero',
                    props: {
                        children: (
                            <Hero
                                title=" Welcome to Fat Cat&#39;s"
                                image="/media/landing/hero.svg"
                            />
                        ),
                    },
                },
                {
                    type: 'componentItemsShowcase',
                    props: {
                        children: <ItemsShowcase items={items} />,
                    },
                },
            ],
        },
        {
            key: 2,
            type: 'gridLayout',
            props: { title: 'Grid layout' },
            components: [
                {
                    type: 'componentList',
                    props: {
                        children: (
                            <List
                                useData={useUsers}
                                renderItem={(user: User) => (
                                    <ListItem user={user} />
                                )}
                                heading="Users List"
                            />
                        ),
                    },
                },
                {
                    type: 'componentForm',
                    props: {
                        children: (
                            <Form
                                useMutation={usePost}
                                validationSchema={validationSchema}
                                renderForm={renderForm}
                                heading="Posts Form"
                            />
                        ),
                    },
                },
            ],
        },
    ];

    return (
        <main className="m-2">
            {data.map((page: LayoutSectionData) => (
                <LayoutSection
                    key={page.key}
                    type={page.type}
                    props={page.props}
                    components={page.components}
                />
            ))}
        </main>
    );
}

export default App;
