const elBtns = document.querySelectorAll('.tip__btn')

document.querySelector('.filter__form').addEventListener('submit', evt => {
  evt.preventDefault()
})

document.querySelector('.main').addEventListener('click', evt => {
  // if (!evt.target.classList.contains('category__select-btn') && !evt.target.classList.contains('category__btn') && !evt.target.classList.contains('subcategory__btn')) {
  //   console.log('error');
  //   document.querySelector('.category').classList.remove('category--active')
  //   document.querySelector('.subcategory').classList.remove('subcategory--active')
  // }

  if (evt.target.classList.contains('category__select-btn')) {
    document.querySelector('.category').classList.toggle('category--active')
  }
  if(evt.target.classList.contains('category__btn')) {
    document.querySelector('.filter__category-box').classList.toggle('subcategory--active')
  }
  if(evt.target.classList.contains('subcategory__back')) {
    document.querySelector('.filter__category-box').classList.remove('subcategory--active')
    document.querySelector('.category').classList.add('category--active')
  }

  if (!document.querySelector('.category--active')) {
    document.querySelector('.filter__category-box').classList.remove('subcategory--active')
  }
})

elBtns.forEach(btn => {
  btn.addEventListener('click', evt => {
    elBtns[0].classList.remove('tip__btn--active')
    elBtns[1].classList.remove('tip__btn--active')


    btn.classList.add('tip__btn--active')
  })
})