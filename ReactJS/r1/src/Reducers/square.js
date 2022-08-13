function square(state, action) {
    let stateCopy = [...state];
    switch (action.type) {
        case 'add':
            action.payload = action.payload === '' ? stateCopy.length : parseInt(action.payload);
            action.payload = isNaN(action.payload) ? stateCopy.length : action.payload;
            stateCopy.push({ number: action.payload, show: true });
            break;
        case 'rem':
            stateCopy.shift();
            break;
        case 'clear':
            stateCopy = [];
            break;
        case 'up':
            stateCopy.sort((a, b) => a.number - b.number);
            break;
        case 'down':
            stateCopy.sort((a, b) => b.number - a.number);
            break;
        case 'f1':
            stateCopy = stateCopy.map(s => s.number % 2 ? { ...s, show: true } : { ...s, show: false });
            break;
        case 'f2':
            stateCopy = stateCopy.map(s => s.number % 2 ? { ...s, show: false } : { ...s, show: true });
            break;
        case 'f_all':
            stateCopy = stateCopy.map(s => ({ ...s, show: true }));
            break;
        default:
    }
    return stateCopy;
}
export default square;