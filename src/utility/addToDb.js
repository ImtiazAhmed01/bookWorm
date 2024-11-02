const getStoredReadList = () => {
    const stoeredListStr = localStorage.getItem('read-list');
    if (stoeredListStr) {
        const stoeredList = JSON.parse(stoeredListStr)
        return stoeredList
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const stoeredList = getStoredReadList();
    if (stoeredList.include(id)) {
        console.log(id, 'already add')
    }
    else {
        stoeredList.push(id)
        const stoeredListStr = JSON.stringify(stoeredList);
        localStorage.setItem('read-list', stoeredListStr)
    }
}
// export (addToStoredReadList);
export { addToStoredReadList }