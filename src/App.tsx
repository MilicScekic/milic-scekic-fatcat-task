import { List } from '@homework-task/components/List';
import useUsers, { User } from '@homework-task/hooks/useUsers';
import { ListItem } from '@homework-task/components/ListItem';

import './styles.css';

function App(): JSX.Element {
    return (
        <main>
            <List
                useData={useUsers}
                renderItem={(user: User) => <ListItem user={user} />}
                heading="Users List"
            />
        </main>
    );
}

export default App;
