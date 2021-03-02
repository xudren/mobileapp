let defaultCity = '大连'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}



const state = { // 获取表格数据的参数，初始状态获取全部的模型数据
  city: defaultCity
}
const mutations = {
  CHANGE_CITY: (state, newCity) => {
    state.city = newCity
    try {
      localStorage.city = newCity
    } catch (e) {}
  }

}
const getters = {
  city: state => state.city,
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
