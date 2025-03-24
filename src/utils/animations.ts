
// Animations utility file for intersection observer
export const setupScrollAnimations = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};

// Function to add animation delay to children
export const addStaggeredDelay = (parent: HTMLElement, childSelector: string, baseDelay: number = 0.1) => {
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    (child as HTMLElement).style.transitionDelay = `${baseDelay * index}s`;
  });
};

// Specific animations for components
export const animateCount = (element: HTMLElement, target: number, duration: number = 2000) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentCount = Math.floor(progress * target);
    element.textContent = currentCount.toString();
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target.toString();
    }
  };
  
  window.requestAnimationFrame(step);
};
