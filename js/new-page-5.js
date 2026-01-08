const mainBoxEl = document.querySelector('.main-box');

// mainBoxEl.addEventListener('mouseenter', handleMouseCrossEl);
// mainBoxEl.addEventListener('mouseleave', handleMouseCrossEl);

// mainBoxEl.addEventListener('mouseover', handleMouseCrossEl);

// mainBoxEl.addEventListener('mouseout', handleMouseCrossEl);

// mainBoxEl.addEventListener('mousemove', handleMouseCrossEl;

function handleMouseCrossEl(e) {
  console.log(e.type, e);
}

mainBoxEl.addEventListener('mousemove', throttle(handleMouseMovement, 300));

function handleMouseMovement(e) {
  console.log(e.type, e);
}

/// mobile

document.addEventListener('touchstart', handleMobileTouch);

function handleMobileTouch(e) {
  console.log(e);
  console.log(e.type);
}
