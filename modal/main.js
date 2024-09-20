// add active-modal
let modal = document.querySelectorAll(".modal")
let cardbtn = document.querySelectorAll(".product-card")
let modalclose = document.querySelectorAll(".modal-close")
let modalcard = document.querySelectorAll(".modal-card")
//add active-modal to modal
let activemodal = (modalclick) =>{
    modal[modalclick].classList.add("active-modal")
}
cardbtn.forEach((cardbtn,i) =>{
    cardbtn.addEventListener("click",()=>{
        activemodal(i)
    })
})
// remove active-modal by closemodal
modalclose.forEach((modalclose) =>{
    modalclose.addEventListener("click",() =>{
        modal.forEach((modalremove) =>{
            modalremove.classList.remove("active-modal")
        })
    })
})
//  remove active-modal from modal by modal
modal.forEach((modal) =>{
    modal.addEventListener("click",() =>{
        modal.classList.remove("active-modal")
    })})

    // don't remove active-modal from modal
    modalcard.forEach((modalcard)=>{
        modalcard.addEventListener("click",(e)=>{
            e.stopPropagation()
        })
    })