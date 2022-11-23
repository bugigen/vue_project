<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" @click="$router.push('/')">Главная</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" @click="$router.push('/drag-tank')">Танки</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">
        Другие проекты
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" @click="$router.push('/drag-car')">Авто</a></li>
        <li><a class="dropdown-item" @click="$router.push('/api')">Работа</a></li>
        <li><a class="dropdown-item" @click="$router.push('/bitcoin')">Биткоин</a></li>
      </ul>
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
