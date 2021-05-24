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
