import './TheElementsOfPlot.css';

export enum ElementsOfPlot {
    'Exposition' = 0, 
    'Conflict' = 1,
    'RisingAction' = 2,
    'Climax' = 3,
    'FallingAction' = 4,
    'Resolution' = 5
}

type props = {
    active: ElementsOfPlot,
    handleElementClicked: (element: ElementsOfPlot) => void
}

export default function TheElementsOfPlot({active, handleElementClicked}: props) {
    console.log('active', active)
    return (
        <svg viewBox="0 0 640 480" >
           <g id="Paths">
            <line id="Path-1" className={'active'} x1="32" y1="400.5" x2="176" y2="400.5"/>
            <line id="Path-2" className={active >= ElementsOfPlot.Conflict ? 'active' : ''} x1="175.5" y1="399.8" x2="283.3" y2="271.5"/>
            <line id="Path-3" className={active >= ElementsOfPlot.RisingAction ? 'active' : ''} x1="283.3" y1="271.5" x2="423.8" y2="104.4"/>
            <line id="Path-4" className={active > ElementsOfPlot.Climax ? 'active' : ''} x1="423.8" y1="104.4" x2="471" y2="360.5"/>
            <line id="Path-5" className={active >= ElementsOfPlot.Resolution ? 'active' : ''} x1="471" y1="360.5" x2="608" y2="360.5"/>

            <circle id="Cir-1" className={'active'} cx="32.2" cy="399.8" r="12.2"/>
            <circle id="Cir-2" className={active > ElementsOfPlot.Exposition ? 'active' : 'next'} cx="175.5" cy="399.8" r="12.2"/>
            <circle id="Cir-3" className={(active >= ElementsOfPlot.RisingAction ? 'active' : '') + (active === ElementsOfPlot.Conflict ? 'next' : '')} cx="283.9" cy="271.5" r="12.2"/>
            <circle id="Cir-4" className={(active >= ElementsOfPlot.Climax ? 'active' : '') + (active === ElementsOfPlot.RisingAction ? 'next' : '')} cx="423.4" cy="104.6" r="12.2"/>
            <circle id="Cir-5" className={(active >= ElementsOfPlot.Resolution ? 'active' : '') + (active === ElementsOfPlot.FallingAction ? 'next' : '')} cx="470.7" cy="359.9" r="12.2"/>
            <circle id="Cir-6" className={(active === ElementsOfPlot.Resolution ? 'active' : '')} cx="607.8" cy="359.9" r="12.2"/>
        </g>
        <g id="Text">
            <text 
                id="text-exposition" 
                textAnchor='middle' 
                transform="matrix(1 0 0 1 103.9998 387.6002)" 
                className={active === ElementsOfPlot.Exposition ? 'active' : ''}
                onClick={() => {handleElementClicked(ElementsOfPlot.Exposition)}}
            >
                Exposition
            </text>
            <text 
                id="text-rising-action" 
                textAnchor='middle' 
                transform="matrix(0.6283 -0.778 0.778 0.6283 345.5495 180.6167)" 
                className={active === ElementsOfPlot.RisingAction ? 'active' : ''}
                onClick={() => {handleElementClicked(ElementsOfPlot.RisingAction)}}
            >
                Rising Action
            </text>
            <text 
                id="text-conflict" 
                textAnchor='middle' 
                transform="matrix(0.6283 -0.778 0.778 0.6283 220.7326 328.3179)" 
                className={active === ElementsOfPlot.Conflict ? 'active' : ''}
                onClick={() => {handleElementClicked(ElementsOfPlot.Conflict)}}
            >
                Conflict
            </text>
            <text 
                id="text-climax" 
                textAnchor='middle' 
                transform="matrix(1 0 0 1 423.7997 82.4001)" 
                className={active === ElementsOfPlot.Climax ? 'active' : ''}
                onClick={() => {handleElementClicked(ElementsOfPlot.Climax)}}
            >
                Climax
            </text>
            <text 
                id="text-falling-action" 
                textAnchor='middle' 
                transform="matrix(0.1876 0.9822 -0.9822 0.1876 464.0671 236.6667)" 
                className={active === ElementsOfPlot.FallingAction ? 'active' : ''}
                onClick={() => {handleElementClicked(ElementsOfPlot.FallingAction)}}
            >
                Falling Action
            </text>
            <text 
                id="text-resolution" 
                textAnchor='middle' 
                transform="matrix(1 0 0 1 539.4996 347.6996)" 
                className={active === ElementsOfPlot.Resolution ? 'active' : ''}
                onClick={() => {handleElementClicked(ElementsOfPlot.Resolution)}}
            >
                Resolution
            </text>
        </g>
        </svg>
    )
}