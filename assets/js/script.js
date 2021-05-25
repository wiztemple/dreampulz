const dropDowns = document.querySelectorAll('.memberToggleDropdown');

const toggleMembersDropdown = () => {
  const toggleBtn = document.querySelector('.toggleBtn');
  dropDowns.forEach(dropDown => {
    toggleBtn.addEventListener('click', () => {
      dropDown.classList.toggle('showDropdown');
    })
  })

}
toggleMembersDropdown()
// toggleBtn.forEach(tgglebtn => tgglebtn.addEventListener('click', () => toggleMembersDropdown()))

new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '.dots',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});