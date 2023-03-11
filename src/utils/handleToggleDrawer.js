export const handleToggleDrawer = (open, callBack) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    callBack(open);
};
