import { ListItemProps } from '@homework-task/typescript/interfaces';

export const ListItem: React.FC<ListItemProps> = ({ user }) => {
    return (
        <li className="bg-gray5 mb-3 px-4 py-1 w-fit">
            {user.id}: <strong className="text-primary">{user.name}</strong> (
            {user.username}), {user.email.toLowerCase()}, {user.phone}
        </li>
    );
};
