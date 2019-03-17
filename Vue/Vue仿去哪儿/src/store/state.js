let defulitCity = '北京'
try {
  if (localStorage.city) {
    defulitCity = localStorage.city
  }
} catch (e) {

}
export default {
  city: defulitCity
}
