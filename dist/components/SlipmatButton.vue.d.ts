declare const _sfc_main: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        required: false;
    };
    isWorking: {
        type: BooleanConstructor;
        required: false;
    };
    workingText: {
        type: StringConstructor;
        required: false;
    };
}, {
    isPrimary: import("vue").Ref<boolean>;
    isSecondary: import("vue").Ref<boolean>;
    buttonType: import("vue").Ref<"button" | "submit">;
    isFullWidth: import("vue").Ref<boolean>;
    attrs: {
        [x: string]: unknown;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        required: false;
    };
    isWorking: {
        type: BooleanConstructor;
        required: false;
    };
    workingText: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    isWorking: boolean;
}, {}>;
export default _sfc_main;
