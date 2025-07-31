const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return []
    }
}
const addToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        alert('already exist')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)
    }
}
const getStoredWishlist = () =>{
    const storedWishlistStr = localStorage.getItem('wish-list');
    if(storedWishlistStr){
       const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    }
    else{
        return []
    }
}
const addToStoredWishlist = (id)=>{
    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)){
        alert('already exist')
    }
    else{
        storedWishlist.push(id);
        const storedListStr = JSON.stringify(storedWishlist);
        localStorage.setItem('wish-list', storedListStr)
    }
}

export {addToStoredReadList, addToStoredWishlist}