export function isVisibleList(hovers, id) {
    let hover = hovers.filter(e => e.id === id);
    if (hover.length > 0) return hover[0].hover;
    return false;
}

export function handleOnMouseOver(id, hovers, setHovers) {
    let hover = hovers.filter(h => h.id === id);
    if (hover.length > 0) {
        hover[0].hover = true;
        setHovers([...hovers]);
    }
}

export function handleOnMouseOut(id, hovers, setHovers) {
    let hover = hovers.filter(h => h.id === id);
    if (hover.length > 0) {
        hover[0].hover = false;
        setHovers([...hovers]);
    }
}