const channel = document.querySelector('.channel');
if (channel) {
  const blocks = channel.querySelectorAll('.channel__content');
  const buttons = document.querySelectorAll('.toggle-categories button');

  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      addActiveClass(e.target.id);
    });
  });

  const addActiveClass = (className) => {
    blocks.forEach((block) => {
      block.classList.remove('active');
      if (block.classList.contains(className)) {
        block.classList.add('active');
      }
    });
  };
}
