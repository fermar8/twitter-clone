import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import MenuItem from './MenuItem';
import Button from '@/styles/components/buttons/Button';

import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/hooks/useAppProvider';

const Menu = () => {
    const router = useRouter();
    const { setUser } = useContext(AppContext);

    const handleSubmit = () => {
        setUser(undefined);
        router.replace('/');
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', marginLeft: '88px', width: '276px'}}>
            <MenuItem icon={<AiOutlineHome />} text="Home" route="feed" />
            <MenuItem icon={<AiOutlineMail />} text="Mis Tweets" route="my-tweets"/>
            <Button onClick={() => handleSubmit()}width="200px">Logout</Button>
        </div>
    );
}

export default Menu;