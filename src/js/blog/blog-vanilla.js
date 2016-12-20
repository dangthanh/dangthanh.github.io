export function addZoomImage () {
  // Add data-zoom for image
  let allImages = document.querySelectorAll('article img')

  for (let i = 0, lenImages = allImages.length; i < lenImages; i++) {
    let image = allImages[i]

    if (image.parentNode.tagName !== 'A') {
      image.setAttribute('data-action', 'zoom')
    }
  }
}

export function addBlankLink () {
  // Check link external or internal
  let allLinks = document.querySelectorAll('a')

  for (let i = 0, lenLinks = allLinks.length; i < lenLinks; i++) {
    let link = allLinks[i]

    if (link.getAttribute('href').indexOf('http') > -1) {
      link.setAttribute('target', '_blank')
    }
  }
}
