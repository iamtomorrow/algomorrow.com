
import Logo from '../../../../../public/media/images/logos/deskedge-logo.png';
import { Header } from '../../Header';
import './styles.css';

export const Edge = ( ) => {
    return (
        <div className='edge-global--container'>
            <div className='edge-global-inner--container'>
                <Header Logo={ Logo } />
            </div>
        </div>
    )
}
