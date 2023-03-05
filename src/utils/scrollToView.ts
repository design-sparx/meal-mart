export const scrollToView = (targetRef: any) => {
  const element = document.getElementById(targetRef);
  const headerOffset = 70;
  const elementPosition = element?.getBoundingClientRect().top || 0;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  return targetRef.current.scrollIntoView({top: offsetPosition, behavior: 'smooth'})
}
