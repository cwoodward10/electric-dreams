import { GenerationResponse } from '../modules/utility/generator';

type props = {
    generatedImages: GenerationResponse | undefined;
}

export function TheImages({generatedImages}:props) {
    let imageElements = generatedImages ? 
    (
        <ul>
            {
                generatedImages.artifacts.map((g, index) => {
                    return (
                        <li key={index}>
                            <img src={`data:image/png;base64,${g.base64}`} />
                        </li>
                    )
                })
            }
        </ul>
    ) : null;

    return (
        <div>
            {imageElements}
        </div>
    )
}