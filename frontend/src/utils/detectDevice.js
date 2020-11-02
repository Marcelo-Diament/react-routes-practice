const detectDevice = () => {
  const breakpoints = {
    tablet: 640,
    laptop: 980,
    desktop: 1200,
    ultraWide: 1920
  }

  let width = window.innerWidth

  let devices = {
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isUltrawide: false
  }

  let currentDevice

  switch (true) {
    case width < breakpoints.tablet:
      devices.isMobile = true
      currentDevice = 'mobile'
      break
    case width < breakpoints.laptop:
      devices.isTablet = true
      currentDevice = 'tablet'
      break
    case width < breakpoints.desktop:
      devices.isLaptop = true
      currentDevice = 'laptop'
      break
    case width < breakpoints.ultraWide:
      devices.isDesktop = true
      currentDevice = 'desktop'
      break
    default:
      devices.isUltrawide = true
      currentDevice = 'ultraWide'
      break
  }
  return currentDevice
}

export { detectDevice }