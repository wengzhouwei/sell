let defaucity = '杭州'
try {
  if (localStorage.city) {
    defaucity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaucity
}
