import { useEffect, useRef, useState } from "react";

import TheElementsOfPlot from './TheElementsOfPlot';

import { ElementsOfPlot } from './TheElementsOfPlot';

export default function PlotElementSection() {
    const heading = "How it works";
    const para = (
        <span>The story generator will prompt you for each of <a target="#" href="https://www.juicyenglish.com/blog/parts-of-the-plot">the 6 main parts of a plot</a> and then use those as the basis for it's illustrations.</span>
    )

    const [currentPlotItem, setCurrentPlotItem] = useState(ElementsOfPlot.Exposition);
    const handleCurrentPlotItemChanged = (element: ElementsOfPlot) => {
        setCurrentPlotItem(element);

        clearInterval(interval.current);
        interval.current = createIterationInterval();
    }

    const interval = useRef(undefined as any);
    function createIterationInterval() {
        return setInterval(() => {
            if (currentPlotItem === ElementsOfPlot.Resolution) {
                setCurrentPlotItem(0);
            } else {
                setCurrentPlotItem(currentPlotItem + 1);
            }
        }, 3000)
    }
    useEffect(() => {
        interval.current = createIterationInterval();

        return () => clearInterval(interval.current);
    })

    const elementsOfPlotText = [
        {
            name: 'Exposition', 
            text: 'The introduction to the story. Characters, setting, and background information are introduced to the audience as are any emotional stakes that will become relevant later on.', 
            id: ElementsOfPlot.Exposition},
        {
            name: 'Conflict', 
            text: 'The main goal of the story is introduced here. That often means it is the primary driver for what the main character(s) is trying to accomplish.', 
            id: ElementsOfPlot.Conflict},
        {
            name: 'Rising Action', 
            text: 'Rising action is where things get complicated for the main character. The conflict is not, for instance, as easy to solve as initially thought. Aspects of the story get escalated.', 
            id: ElementsOfPlot.RisingAction},
        {
            name: 'Climax', 
            text: 'The peak of the action where the main character is confronting the conflicting. This is where the most excitement occurs and the big drama plays out.', 
            id: ElementsOfPlot.Climax},
        {
            name: 'Falling Action', 
            text: 'This is where the conflict is starting to get resolved. The big action from the climax slows as complications and conflicts get resolved.', 
            id: ElementsOfPlot.FallingAction},
        {
            name: 'Resolution', 
            text: 'The end of the story where the conflict is resolved. These can be happy or tragic endings. Either way, the audience gets a sense of finality and closure at this point in the story.', 
            id: ElementsOfPlot.Resolution},
    ]
    function createElementForPlotElement(element: {name: string, text: string} | undefined) {
        if (!element) return null;
        return (
            <div className="w-full flex flex-col gap-2">
                <h4 className="text-accent-red text-xl font-bold">{element.name}</h4>
                <p className='text-white'>{element.text}</p>
            </div>
        )
    }
    const elementForPlotElement = createElementForPlotElement(elementsOfPlotText.find(e => e.id === currentPlotItem));
    
    return (
        <div className="flex flex-col-reverse gap-4 md:gap-16 lg:grid lg:grid-cols-2">
            <section className="h-full flex flex-col gap-10">
                <div className="flex flex-col gap-10">
                    <h3 className="hidden lg:inline-block section-heading">{heading}</h3>
                    <p className="text-white hidden lg:inline-block">{para}</p>

                    { elementForPlotElement }
                </div>

                <button className="mt-3">
                    Try it out!
                </button>
            </section>
            <section className="flex flex-col gap-4">
                <h3 className="section-heading lg:hidden">{heading}</h3>
                <p className="text-white lg:hidden">{para}</p>
                <div className="relative rounded-lg bg-surface-elevated">
                    <p className="text-white text-lg lg:text-3xl absolute top-3 left-3">Elements of plot</p>
                    <TheElementsOfPlot active={currentPlotItem} handleElementClicked={handleCurrentPlotItemChanged} />
                </div>
            </section>
        </div>
    )
}