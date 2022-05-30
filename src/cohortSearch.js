// SOURCE CODE

const cohortSearch = (list, name) => {
  return Boolean(list.find(el => el === name))
}

module.exports = {
  cohortSearch
}
