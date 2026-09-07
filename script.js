const hero = document.querySelector('.hero');
const content = document.querySelector('.content');
const interfaceImage = document.querySelector('.interface-echo');
const interfaceLabel = document.querySelector('.interface-label');

function animateScroll() {
  const start = hero.offsetTop;
  const distance = hero.offsetHeight - window.innerHeight;
  const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
  const lift = Math.min(1, progress * 1.35);
  const fade = Math.min(1, Math.max(0, (progress - .08) / .47));
  const labelProgress = Math.min(1, Math.max(0, (progress - .58) / .26));

  content.style.opacity = String(1 - fade);
  content.style.filter = `blur(${fade * 13}px)`;
  content.style.transform = `translate(-50%, calc(-50% - ${fade * 42}px)) scale(${1 - fade * .06})`;
  interfaceImage.style.transform = `perspective(700px) rotateX(${54 - lift * 54}deg) rotateZ(${-9 + lift * 9}deg) translate(${-lift * 24}vw, ${-lift * 105}px)`;
  interfaceLabel.style.opacity = String(labelProgress);
  interfaceLabel.style.filter = `blur(${(1 - labelProgress) * 14}px)`;
  interfaceLabel.style.transform = `translate(-50%, calc(-50% + ${34 - labelProgress * 34}px)) scale(${.94 + labelProgress * .06})`;
}
window.addEventListener('scroll', animateScroll, { passive: true });
animateScroll();
