import { NavLink } from 'react-router-dom';

import { routeConstants } from '../../main';
import { MAX_WIDTH } from '../../App';

export default function TheHeader() {
    function navLinkText(text: string) {
        return (
            <p 
                className={`font-semibold`}
            >
                {text}
            </p>
        )
    }

    return (
        <div 
            className="w-screen mx-auto z-50 flex justify-end gap-3 pr-3 pt-3"
            style={{maxWidth: `${MAX_WIDTH}px`}}
        >
            <NavLink to={routeConstants.HOME} 
            className={(({isActive}: any) => isActive ? 'text-accent-red' : 'text-accent-yellow')}
            >
                {navLinkText('Home')}
            </NavLink>
            <NavLink to={routeConstants.GENERATOR} 
            className={(({isActive}: any) => isActive ? 'text-accent-red' : 'text-accent-yellow')}
            >
                {navLinkText('Create')}
            </NavLink>
            <NavLink to={routeConstants.ABOUT} 
            className={(({isActive}: any) => isActive ? 'text-accent-red' : 'text-accent-yellow')}
            >
                {navLinkText('About')}
            </NavLink>
        </div>
    )
}