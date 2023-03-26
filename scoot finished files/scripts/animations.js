gsap.registerPlugin(ScrollTrigger);


// Select all the rightArrow with the same class name
const rightArrows = document.querySelectorAll('.right-arrow-animate');
const leftArrows = document.querySelectorAll('.left-arrow-animate');

// Loop through each rightArrow

rightArrows.forEach((rightArrow) => {
    gsap.to(rightArrow, {xPercent: -100})
} )
leftArrows.forEach((rightArrow) => {
    gsap.to(rightArrow, {xPercent: 100})
} )

rightArrows.forEach((rightArrow) => {
  // Create a new ScrollTrigger for each rightArrow
//   gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: rightArrow,
    start: 'top 80%',
    end: '-50% top',
    // toggleClass: 'active',
    // markers: true, // Remove this line if you don't want to see the markers
    onEnter: () => {
      // Animate the leftArrow when it enters the viewport
      gsap.to(rightArrow, { xPercent: 0, duration: 0.5 });
    },
    onLeave: () => {
      // Animate the rightArrow when it enters the viewport
      gsap.to(rightArrow, { xPercent: -100, duration: 0.5 });
    },
    onEnterBack: () => {
      // Animate the rightArrow when it enters the viewport
      gsap.to(rightArrow, { xPercent: 0, duration: 0.5 });
    },
    onLeaveBack: () => {
      // Animate the rightArrow when it enters the viewport
      gsap.to(rightArrow, { xPercent: -100, duration: 0.5 });
    },
    // onEnter: () => {
    //   // Animate the rightArrow when it enters the viewport
    //   gsap.to(rightArrow, { xPercent: 0, duration: 0.5 });
    // // rightArrow.classList.add('translate-left')
    // },
    // onEnterBack: () => {
    //   // Restart the animation when the rightArrow re-enters the viewport
    //   gsap.to(rightArrow, { xPercent: 0, duration: 0.5 });
    //   gsap.to(rightArrow, { xPercent: 100, duration: 1, delay: 0.5 });
    // },
    // onLeaveBack: () => {
    //   // Reverse the animation when the rightArrow leaves the viewport
    //   gsap.to(rightArrow, { xPercent: 0, duration: 0.5 });
    // },
    // onLeave: () => {
    //   // Reverse the animation when the rightArrow leaves the viewport
    //   gsap.to(rightArrow, { xPercent: -100, duration: 0.5 });
    // // rightArrow.classList.remove('translate-left')

    // },
    // onLeaveBack: () => {
    //   // Reverse the animation when the rightArrow leaves the viewport
    //   gsap.to(rightArrow, { xPercent: 0, duration: 0.5 });
    // // rightArrow.classList.remove('translate-left')

    // },
  });
});
leftArrows.forEach((leftArrow) => {
  // Create a new ScrollTrigger for each leftArrow
//   gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: leftArrow,
    start: 'top 80%',
    end: '-50% top',
    // markers: true, // Remove this line if you don't want to see the markers
    onEnter: () => {
      // Animate the leftArrow when it enters the viewport
      gsap.to(leftArrow, { xPercent: 0, duration: 0.5 });
    },
    onLeave: () => {
      // Animate the leftArrow when it enters the viewport
      gsap.to(leftArrow, { xPercent: 100, duration: 0.5 });
    },
    onEnterBack: () => {
      // Animate the leftArrow when it enters the viewport
      gsap.to(leftArrow, { xPercent: 0, duration: 0.5 });
    },
    onLeaveBack: () => {
      // Animate the leftArrow when it enters the viewport
      gsap.to(leftArrow, { xPercent: 100, duration: 0.5 });
    },
    // onEnterBack: () => {
    //   // Restart the animation when the leftArrow re-enters the viewport
    //   gsap.to(leftArrow, { xPercent: 0, duration: 0.5 });
    //   gsap.to(leftArrow, { xPercent: 100, duration: 1, delay: 0.5 });
    // },
    // onLeaveBack: () => {
    //   // Reverse the animation when the leftArrow leaves the viewport
    //   gsap.to(leftArrow, { xPercent: 0, duration: 0.5 });
    // },
    onLeave: () => {
      // Reverse the animation when the leftArrow leaves the viewport
      gsap.to(leftArrow, { xPercent: 100, duration: 0.5 });
    },
  });
});

const maskElements = document.querySelectorAll('.mask-element')

maskElements.forEach(mE => {
  gsap.to(mE, {
    // trigger: mE,
yPercent: 100,
  })
})
maskElements.forEach(mE => {
ScrollTrigger.create(
 {
  trigger: mE,
  start: 'top 88%',
  end: 'bottom 20%',
  // markers : true,
  // onEnter : () => mE.classList.add('translate-up'),
  onEnter : () => {
    gsap.to(mE, {
      yPercent: 0,
      duration: 0.5,
    })
  },
  onLeave  : () => {
    gsap.to(mE, {
      yPercent: 100,
      duration: 0.5,
    })
  },
  onEnterBack : () => {
    gsap.to(mE, {
      yPercent: 0,
      duration: 0.5,
    })
  },
  onLeaveBack : () => {
    gsap.to(mE, {
      yPercent: 100,
      duration: 0.5,
    })
  },
 }
)
})