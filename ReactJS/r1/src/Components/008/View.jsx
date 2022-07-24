

function View({ view, number, element }) {
    if (number !== view) {
        return null
    }

    return element;
}
export default View;