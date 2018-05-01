<<<<<<< HEAD
/// <reference types="react" />
import React, { PureComponent } from 'react';
export interface SegmentTermProps {
    hasAddButton?: boolean;
    hasSeparator?: boolean;
    isEditable?: boolean;
    isEditing?: boolean;
    label?: string;
    onAddButtonClick?: (e: any) => void;
    onCancel?: (e: any) => void;
    onConfirm?: (e: any) => void;
    onEdit?: (e: any) => void;
    queryName?: string;
    radios?: boolean;
    renderAlert?: () => React.ReactNode;
    renderInputs?: () => React.ReactNode;
    showConfirm?: boolean;
    title: string;
}
export declare class SegmentTerm extends PureComponent<SegmentTermProps> {
    static defaultProps: {
        hasAddButton: boolean;
        hasSeparator: boolean;
        isEditable: boolean;
        isEditing: boolean;
        radios: boolean;
    };
    readonly termControls: React.ReactNode;
    render(): JSX.Element;
}
=======
/// <reference types="react" />
import React, { PureComponent } from 'react';
export interface SegmentTermProps {
    editable?: boolean;
    editing?: boolean;
    hasAddButton?: boolean;
    hasSeparator?: boolean;
    label?: string;
    onAddButtonClick?: (e: any) => void;
    onCancel?: (e: any) => void;
    onConfirm?: (e: any) => void;
    onEdit?: (e: any) => void;
    queryName?: string;
    radios?: boolean;
    renderAlert?: () => React.ReactNode;
    renderInputs?: () => React.ReactNode;
    showConfirm?: boolean;
    title: string;
}
export declare class SegmentTerm extends PureComponent<SegmentTermProps> {
    static defaultProps: {
        editable: boolean;
        editing: boolean;
        hasAddButton: boolean;
        hasSeparator: boolean;
        radios: boolean;
    };
    readonly termControls: React.ReactNode;
    render(): JSX.Element;
}
>>>>>>> 3847efcccf5ebca2e4dc3a3fe5bf8592837f3bf0
