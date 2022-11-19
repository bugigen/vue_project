<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" @click="$router.push('/')">Main Page</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">
        Drag And Drop
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="$router.push('/drag-tank')">Tank</a></li>
        <li><a class="dropdown-item" @click="$router.push('/drag-car')">Car</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" @click="$router.push('/api')">Job</a>
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
  background: var(--color-bg-teal);
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
    overflow: auto;

    .nav-link {
      font-size: 0.8em;
      padding: 0;
    }
  }
}
</style>
