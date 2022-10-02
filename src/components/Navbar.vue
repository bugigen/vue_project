<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" @click="$router.push('/')">Main Page</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
        Drag And Drop
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="$router.push('/drag-tank')">Tank</a></li>
        <li><a class="dropdown-item" @click="$router.push('/drag-car')">Car</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" @click="$router.push('/api')">Api</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" @click="$router.push('/bitcoin')">Bitcoin</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.nav {
  li {
    cursor: pointer;
  }
  background: #00bebe;
}
</style>
