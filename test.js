;[0, 1, 2, 3, 4, 5].some((element) => {
  if (element > 3) {
    console.log(element)
    return null
  }
})
