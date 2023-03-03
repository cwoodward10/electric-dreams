import {  } from 'react';

import { GeneratorParams, ClipGuidanceOptions } from '../../modules/utility/generator';

type props = {
    settings: GeneratorParams,
    onAdvancedSettingsChanged: (settings: GeneratorParams) => void;
}

export function TheAdvancedSettings({settings, onAdvancedSettingsChanged}: props) {
    const cfgScale: number | undefined = settings.cfgScale;
    const clipGuidance: ClipGuidanceOptions | undefined = settings.clipGuidance;
    const height: number | undefined = settings.height;
    const width: number | undefined = settings.width;
    const samples: number |  undefined = settings.samples;
    const seed: number | undefined = settings.seed;
    const steps: number | undefined = settings.samples;

    return (
        <></>
    )
}