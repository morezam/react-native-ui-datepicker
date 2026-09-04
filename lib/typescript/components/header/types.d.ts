import React from 'react';
import { ClassNames, Styles, NavigationPosition } from '../../types';
export type HeaderProps = {
    PrevIcon?: React.ReactNode;
    NextIcon?: React.ReactNode;
    navigationPosition?: NavigationPosition;
    styles?: Styles;
    classNames?: ClassNames;
    isRTL: boolean;
    fontFamily?: string;
};
export type NavigationProps = {
    styles?: Styles;
    classNames?: ClassNames;
    isRTL: boolean;
};
//# sourceMappingURL=types.d.ts.map